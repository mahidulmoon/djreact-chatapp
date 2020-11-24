from django.urls import path,include
from rest_framework import routers
from .views import UserRegisterViewSet


router = routers.DefaultRouter()
router.register('register',UserRegisterViewSet)


urlpatterns = [
    path('',include(router.urls))
]