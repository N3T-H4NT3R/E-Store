from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *



class CatagoryImage_viewsets(ModelViewSet):
    queryset = CatagoryImage.objects.all()
    serializer_class = CatagoryImage_Serializers

class About_The_Product_viewsets(ModelViewSet):
    queryset = About_The_Product.objects.all()
    serializer_class = About_The_Product_Serializers

class Contact_List_viewsets(ModelViewSet):
    queryset = Contact_List.objects.all()
    serializer_class = Contact_List_Serializers

class Payment_Account_viewsets(ModelViewSet):
    queryset = Payment_Account.objects.all()
    serializer_class = Payment_Account_Serializers

class Product_viewsets(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = Product_Serializers


class Navbar_viewsets(ModelViewSet):
    queryset = Navbar.objects.all()
    serializer_class = Navbar_Serializers

class Cart_viewsets(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = Cart_Serializers

class Hero_viewsets(ModelViewSet):
    queryset = Hero.objects.all()
    serializer_class = Hero_Serializers

class Footer_viewsets(ModelViewSet):
    queryset = Footer.objects.all()
    serializer_class = Footer_Serializers
