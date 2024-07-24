from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register("catagory-image", CatagoryImage_viewsets, basename="catagory-image")
router.register("about-broduct", About_The_Product_viewsets, basename="about_broduct")
router.register("contact-list", Contact_List_viewsets, basename="contact-list")
router.register("payment-account", Payment_Account_viewsets, basename="payment-account")
router.register("product", Product_viewsets, basename="product")
router.register("navbar", Navbar_viewsets, basename="navbar")
router.register("cart", Cart_viewsets, basename="cart")
router.register("hero", Hero_viewsets, basename="hero")
router.register("footer", Footer_viewsets, basename="footer")

urls = router.urls