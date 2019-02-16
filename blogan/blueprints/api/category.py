from flask import request, current_app, jsonify
from flask_login import current_user
from flask_mongoengine.wtf import  model_form
from bson.objectid import ObjectId

from blogan.blueprints.api import api_bp
from blogan.models import Category
from blogan.utils.tools import json2formdata, updateCategoryModel

@api_bp.route('/category', methods = ['GET', 'POST'])
def category():
    if request.method == 'GET':
        categories = Category.objects
        return jsonify(categories)
    elif request.method == 'POST':
        if not current_user.is_authenticated:
            return current_app.login_manager.unauthorized()
        category_form = model_form(Category)
        json_data = request.json
        json_data.update({'father': json_data['father']['$oid']});
        form = category_form(json2formdata(json_data))
        if form.validate():
            new_category=Category(**form.data)
            try:
                new_category.save()
            except Exception as e:
                return jsonify({'errmsg:': str(e)}), 500
            return jsonify(new_category)
        else:
            return jsonify(form.errors), 400

@api_bp.route('/subcategory/<string:father_category_id>', methods = [ 'GET'])
def subcategory_post(father_category_id):
    if request.method == 'GET':
        category = Category.objects(father=father_category_id)
        return jsonify(category)

@api_bp.route('/category/<string:category_id>', methods = [ 'GET', 'PUT', 'DELETE'])
def category_post(category_id):
    if request.method == 'GET':
        category = Category.objects(id=category_id)
        return jsonify(category)
    elif request.method == 'PUT':
        if not current_user.is_authenticated:
            return current_app.login_manager.unauthorized()
        category_form = model_form(Category)
        json_data = request.json
        json_data.update({'father': json_data['father']['$oid']});
        form = category_form(json2formdata(json_data))
        if form.validate():
            category = Category.objects(id=category_id).get_or_404()
            updateCategoryModel(category, form.data)
            category.save()
            return jsonify('success.')
        else:
            return jsonify('failed.')
    elif request.method == 'DELETE':
        if not current_user.is_authenticated:
            return current_app.login_manager.unauthorized()
        category = Category.objects(id=category_id).get_or_404()
        category.delete()
        return jsonify('success.')
