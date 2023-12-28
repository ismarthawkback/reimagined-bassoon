from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet, GenericViewSet, ViewSet
from api.models import *
from rest_framework import permissions
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
)

from django.apps import apps
from django.contrib.contenttypes.models import ContentType
from api.models import *
from rest_framework.response import Response





class AllModels(ViewSet) : 
    def list(self, request):
        app_models = apps.get_app_config('api').get_models()  # Replace 'myapp' with your app name
        serialized_models = []

        for model in app_models:
            content_type = ContentType.objects.get_for_model(model)
            serialized_models.append({
                'app_label': content_type.app_label,
                'model': content_type.model,
                'fields': [field.name for field in model._meta.fields]
                # Additional model metadata can be included as needed
            })

        return Response(serialized_models)