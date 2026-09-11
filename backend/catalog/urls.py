from django.urls import path
from .views import ProductListView,ProductCreateView

urlpatterns = [
    path('products/',ProductListView.as_view(), name='catalog'),
    path('products/new',ProductCreateView.as_view(), name='new-product'),
]