from django.contrib import admin
from .models import *


class UserAdmin(admin.ModelAdmin):
    list_display = ["username", "email"]

admin.site.register(CatagoryImage)
admin.site.register(Product)
admin.site.register(Navbar)
admin.site.register(Cart)
admin.site.register(About_The_Product)
admin.site.register(Contact_List)
admin.site.register(Payment_Account)
admin.site.register(Hero)
admin.site.register(Footer)