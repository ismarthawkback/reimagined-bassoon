from rest_framework.routers import DefaultRouter
from api.views import BookViewSet

router = DefaultRouter()

router.register('books', viewset=BookViewSet, basename='books')

urlpatterns = router.urls