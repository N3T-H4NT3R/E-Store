from rest_framework.serializers import ModelSerializer
from .models import *



class CatagoryImage_Serializers(ModelSerializer):
    class Meta:
        model = CatagoryImage
        fields = "__all__"

class Product_Serializers(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class Navbar_Serializers(ModelSerializer):
    class Meta:
        model = Navbar
        fields = "__all__"

class Cart_Serializers(ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"

class About_The_Product_Serializers(ModelSerializer):
    class Meta:
        model = About_The_Product
        fields = "__all__"

class Contact_List_Serializers(ModelSerializer):
    class Meta:
        model = Contact_List
        fields = "__all__"

class Payment_Account_Serializers(ModelSerializer):
    class Meta:
        model = Payment_Account
        fields = "__all__"

class Hero_Serializers(ModelSerializer):
    class Meta:
        model = Hero
        fields = "__all__"

class Footer_Serializers(ModelSerializer):
    class Meta:
        model = Footer
        fields = "__all__"