from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.

class UserAccountManager(BaseUserManager) :
    def create_user(self, email, username, password = None) :
        if not email :
            return ValueError('Email is required to create an user')
        user = self.model(
            email = self.normalize_email(email=email),
            username = username
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, username, password= None) :
        if not email :
            return ValueError('Email is required to create an user')
        user = self.model(
            email = self.normalize_email(email=email),
            username = username
        )
        user.set_password(password)
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.level = 'editor'
        user.save()
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin) :
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255)
    objects = UserAccountManager()
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    level = models.CharField(max_length=20, choices=[
        ('viewer', 'viewer'),
        ('editor', 'editor'),
    ], default='viewer')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS  = ['username']

    def __str__(self) -> str:
        return self.email