from rest_framework.routers import DefaultRouter
from api.views import  AllModels
from rest_framework.decorators import action
from rest_framework.response import Response

router = DefaultRouter()

router.register('models', viewset=AllModels, basename = "models")

from rest_framework import viewsets, serializers
from django.apps import apps

# Get all models within your app
app_models = apps.get_app_config('api').get_models()

class CustomActionsMixin:
    @action(detail=False, methods=['post'])
    def add_multiple_rows(self, request):
        serializer = self.get_serializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=201)

    @action(detail=False, methods=['post'])
    def delete_multiple_rows(self, request):
        ids = request.data.get('ids', [])
        queryset = self.get_queryset()
        rows = queryset.filter(id__in=ids)
        rows.delete()
        return Response({'message': 'Rows deleted successfully'}, status=200)


for model in app_models:
    class_name = f'{model.__name__}Serializer'
    serializer_class = type(class_name, (serializers.ModelSerializer,), {
        'Meta': type('Meta', (), {'model': model, 'fields': '__all__'})
    })
    # viewset_class = type(f'{model.__name__}ViewSet', (viewsets.ModelViewSet,), {
    #     'queryset': model.objects.all(),
    #     'serializer_class': serializer_class, 
    # })
    viewset_class = type(f'{model.__name__}ViewSet', (CustomActionsMixin, viewsets.ModelViewSet,), {
        'queryset': model.objects.all(),
        'serializer_class': serializer_class, 
    })
    

    router.register(f'{model.__name__.lower()}s', viewset_class)  

urlpatterns = router.urls