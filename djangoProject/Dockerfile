FROM python:3.6
COPY requirements.txt /mnt/py_build/requirements.txt
RUN pip install -r /mnt/py_build/requirements.txt
WORKDIR /code
COPY mount .
EXPOSE 8000
CMD ["sh", "-c", "python manage.py runserver 0.0.0.0:8000"]
#"python manage.py migrate --noinput && python manage.py collectstatic --noinput --clear && python manage.py runserver 0.0.0.0:8000"]
