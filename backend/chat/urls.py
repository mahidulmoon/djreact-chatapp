from django.urls import path,include
from rest_framework import routers
from .views import MessageViewSet


router = routers.DefaultRouter()
router.register('list',MessageViewSet,basename='message')


urlpatterns = [
    path('',include(router.urls)),
]