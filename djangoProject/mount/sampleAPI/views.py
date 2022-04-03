from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import generics
from .models import *
from .serializers import *


@api_view(("GET",))
@renderer_classes((JSONRenderer,))
def index(request):
    return Response("Hello world!")


class PlayerList(generics.ListAPIView):
    serializer_class = PlayerSerializer
    queryset = Player.objects.all()

class PlayerDetail(generics.RetrieveAPIView):
    serializer_class = PlayerSerializer
    queryset = Player.objects.all()
    lookup_field = 'username'
    lookup_url_kwarg = 'username'

# TODO action endpoint for adding to a player's score
