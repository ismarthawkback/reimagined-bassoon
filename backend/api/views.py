from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from api.models import Book
from api.serializers import BookSerializer
from rest_framework import permissions
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
)


class BookViewSet(ListModelMixin, CreateModelMixin, RetrieveModelMixin, GenericViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def list(self, request, *args, **kwargs):
        current_user = request.user
        print(current_user)

        return super().list(request, *args, **kwargs)
