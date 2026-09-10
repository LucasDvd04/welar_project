from django.urls import path
from .views import StoreListView

urlpatterns = [
    path('detail/',StoreListView.as_view(), name='store'),
]