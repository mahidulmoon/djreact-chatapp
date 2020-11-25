from rest_framework import serializers
from .models import Message

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['sender','receiver','message','timestamp']
        extra_kwargs = {'timestamp':{'read_only':True}}