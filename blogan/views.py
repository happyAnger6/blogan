from flask import request, make_response, json
from flask_mongoengine.wtf import model_form

from blogan import app
from blogan.models import Category

@app.route('/')
def index():
    return '<h1>Hello Flask!</h1>'

@app.route('/category', method = ['GET', 'POST'])
def category():
    if request.method == 'GET':
        categories = Category.objects
        response = make_response(json.dumps(categories))
        response.mimetype = 'application/json'
        return response
    elif request.method == 'POST':
        return