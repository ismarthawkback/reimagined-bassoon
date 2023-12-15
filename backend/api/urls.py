from rest_framework.routers import DefaultRouter
from api.views import BookViewSet, AllModels

router = DefaultRouter()

router.register('books', viewset=BookViewSet, basename='books')
router.register('models', viewset=AllModels, basename = "models")

from rest_framework import viewsets, serializers
from django.apps import apps

# Get all models within your app
app_models = apps.get_app_config('api').get_models()

for model in app_models:
    class_name = f'{model.__name__}Serializer'
    serializer_class = type(class_name, (serializers.ModelSerializer,), {
        'Meta': type('Meta', (), {'model': model, 'fields': '__all__'})
    })
    viewset_class = type(f'{model.__name__}ViewSet', (viewsets.ModelViewSet,), {
        'queryset': model.objects.all(),
        'serializer_class': serializer_class,
    })
    router.register(f'{model.__name__.lower()}s', viewset_class)  # Assuming you're using DefaultRouter

urlpatterns = router.urls