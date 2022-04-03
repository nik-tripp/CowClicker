from rest_framework.decorators import api_view, renderer_classes
from rest_framework.generics import get_object_or_404
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


@api_view(("PATCH",))
@renderer_classes((JSONRenderer,))
def increment_clicks(request, username):
    player = get_object_or_404(Player, username=username)
    player.clicks += 1
    player.save()

    return Response(PlayerSerializer(player).data)

