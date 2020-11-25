from django.shortcuts import render
from .models import Message
from .serializers import MessageSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Create your views here.


class MessageViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated,]

    def retrieve(self,request,pk):
        queryset = Message.objects.filter(sender=pk)
        serializer = MessageSerializer(queryset,many=True)
        return Response(serializer.data)
        
    
    def create(self,request):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message" : "send"})

