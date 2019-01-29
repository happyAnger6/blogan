from flask import request, jsonify
from flask_mongoengine.wtf import  model_form
from bson.objectid import ObjectId

from blogan import db
from blogan.blueprints import api_bp
from blogan.models import Category
from blogan.utils.tools import json2formdata

@api_bp.route('/category', methods = ['GET', 'POST'])
def category():
    if request.method == 'GET':
        categories = Category.objects
        return jsonify(categories)
    elif request.method == 'POST':
        category_form = model_form(Category)
        json_data = request.json
        json_data.update({'father': json_data['father']['$oid']})
        form = category_form(json2formdata(json_data))
        if form.validate():
            new_category=Category(**form.data)
            try:
                new_category.save()
            except Exception as e:
                return jsonify({'errormsg:': str(e)}), 500
            return jsonify(new_category)
        else:
            return jsonify(form.errors), 400

@api_bp.route('/category/<string:category_id>', methods = [ 'GET', 'PUT' ])
def category_post(category_id):
    if request.method == 'GET':
        category = Category.objects(id=category_id)
        return jsonify(category)
    elif request.method == 'PUT':
        category_form = model_form(Category)
        form = category_form(request.form)
        if form.validate():
            category = Category.objects(id=category_id).get_or_404()
            category.update(**form.data)
            category.save()
            return 'success.'
        else:
            return 'failed.'