from rest_framework import serializers
from django.contrib.auth.models import User


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password','first_name','last_name']
        extra_kwargs = {'password':{'write_only':True,'required':True }}

    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        user.save()
        return user