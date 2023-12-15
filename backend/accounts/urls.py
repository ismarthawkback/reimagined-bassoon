
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from accounts.views import GetRoutes
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

router = DefaultRouter()




urlpatterns = [
    path('routes/', GetRoutes.as_view(), name='get routes'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
urlpatterns += router.urls