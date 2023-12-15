from rest_framework.routers import DefaultRouter
from api.views import BookViewSet, AllModels

router = DefaultRouter()

router.register('books', viewset=BookViewSet, basename='books')
router.register('models', viewset=AllModels, basename = "models")

urlpatterns = router.urls