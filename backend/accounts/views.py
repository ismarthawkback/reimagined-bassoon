from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication

from rest_framework import viewsets
from django.apps import apps
from django.contrib.contenttypes.models import ContentType
from api.models import *

# Create your views here.


class GetRoutes(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        if user:
            print(user.password)
            print(user.username)
        # print(request)
        routes = ['banglore', 'kolkath']
        return Response(routes)

# all models viewset




