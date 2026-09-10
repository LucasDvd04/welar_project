from django.db import models

# Create your models here.
class Product(models.Model):
    id_shopee = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=255)
    store = models.ForeignKey('store.Store', on_delete=models.PROTECT, related_name='products')
    url_picture = models.URLField(max_length=500, blank=True, null=True)
    url_shopee = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.name