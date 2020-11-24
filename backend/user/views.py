from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializer import UserRegisterSerializer
# Create your views here.


class UserRegisterViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer