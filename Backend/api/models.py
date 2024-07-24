from django.db import models


class CatagoryImage(models.Model):
    Mane_Cat_Image = models.ImageField(upload_to="cat_image")
    Womane_Cat_Image = models.ImageField(upload_to="cat_image")
    Kids_Cat_Image = models.ImageField(upload_to="cat_image")

class Contact_List(models.Model):
    Email = models.EmailField()
    Phone = models.IntegerField()
    Address = models.CharField(max_length=256)
    Telegram = models.CharField(max_length=50)
    Descriptions = models.TextField()

    def __str__(self) -> str:
        return self.Email

class Payment_Account(models.Model):
    Account_Name = models.CharField(max_length=100)
    Account_Number = models.IntegerField()

    def __str__(self) -> str:
        return self.Account_Name

class About_The_Product(models.Model):
    Descriptions = models.TextField()

    def __str__(self):
        return self.Descriptions
    

class Product(models.Model):

    STATUS = (
        ("Womens","Womens"),
        ("Mens","Mens"),
        ("Kids","Kids"),
    )

    Name = models.CharField(max_length=20)
    Price = models.DecimalField(max_digits=6, decimal_places=2)
    is_New = models.BooleanField(default=False)
    is_Popular = models.BooleanField(default=False)
    Stoke_Quantity = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    Image = models.ImageField(upload_to="product")
    Rate = models.FloatField()
    category = models.CharField(max_length=10, choices=STATUS)

    def __str__(self):
        return self.Name
    

class Navbar(models.Model):
    Title = models.CharField(max_length=100)
    Profile_Picture = models.ImageField(upload_to="navbar")
    Image = models.ImageField(upload_to="navbar")

    def __str__(self):
        return self.Title

class Cart(models.Model):
    Descriptions = models.CharField(max_length=500)

    def __str__(self):
        return self.Descriptions

class Hero(models.Model):
    Title1 = models.CharField(max_length=100)
    Title2 = models.CharField(max_length=100)
    Title3 = models.CharField(max_length=100)
    Title4 = models.CharField(max_length=100)
    Large_Logo = models.ImageField(upload_to="hero")
    Small_Logo = models.ImageField(upload_to="hero")

    def __str__(self):
        return self.Title4

class Footer(models.Model):
    Linkdin = models.TextField()
    Telegram = models.TextField()
    Github = models.TextField()
    Email = models.EmailField()
    Phone1 = models.TextField()
    Phone2 = models.TextField()

    def __str__(self):
        return self.Github
