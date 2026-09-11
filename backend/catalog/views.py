from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProductSerializer
from .models import Product
import pandas as pd


# Create your views here.
class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductCreateView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def create(self, request, *args, **kwargs):
        # 1. Verifica se o payload enviado é uma lista [] ou um objeto {}
        is_many = isinstance(request.data, list)
        
        # 2. Passa o argumento 'many' dinamicamente para o serializer
        serializer = self.get_serializer(data=request.data, many=is_many)
        
        # 3. Valida e salva os dados (um ou vários)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        # 4. Retorna a resposta com o status correto (201 Created)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


# def file_insert(request):
#     if request.method == 'POST' and request.FILES.get('file'):
#         file = request.FILES['file']

#         df = pd.read_excel(file)
#         df.

        
#         return Response({'message': 'Produtos inseridos com sucesso!'}, status=status.HTTP_201_CREATED)
    
#     return Response({'error': 'Arquivo não enviado ou método inválido.'}, status=status.HTTP_400_BAD_REQUEST)