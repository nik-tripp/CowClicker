from django.db import models


class Player(models.Model):
    username = models.TextField(primary_key=True)
    clicks = models.IntegerField()
