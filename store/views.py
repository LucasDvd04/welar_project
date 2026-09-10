from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Store
from .serializers import StoreSerializer


class StoreListView(ListAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    
