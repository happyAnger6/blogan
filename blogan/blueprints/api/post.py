from flask import request, jsonify
from flask_mongoengine.wtf import  model_form
from bson.objectid import ObjectId

from blogan.blueprints import api_bp
from blogan.models import Post, Category, User
from blogan.utils.tools import json2formdata

def updatePostModel(model, form):
    for k in form:
        value = form[k]
        print(k, value)
        if value:
            if k == 'title':
                model.update(title = value)
            elif k == 'content':
                model.update(content = value)
            elif k == 'category':
                model.update(category = ObjectId(value['$oid']))
            elif k == 'showFlag':
                model.update(showFlag = value)
            elif k == 'type':
                model.update(type = value)

@api_bp.route('/post', methods = ['GET', 'POST'])
def post():
    if request.method == 'GET':
        posts = Post.objects
        return jsonify(posts)
    elif request.method == 'POST':
        post_form = model_form(Post)
        data = request.json
        post_id = data['_id']['$oid']
        if post_id:
            print(post_id)
            post = Post.objects(id=post_id).get_or_404()
            updatePostModel(post, data)
            post.save()
            return jsonify('success.')
        user_name = data['author']
        author = User.objects(name=user_name).get()
        data.update({'author': author.id})
        print(data)
        form = post_form(json2formdata(data))
        if form.validate():
            category_id = data['category']
            data.update({'category': category_id})
            new_post=Post(**data)
            new_post.save()
            return jsonify('success.')
        else:
            return jsonify('failed.')

@api_bp.route('/post/<string:post_id>', methods = [ 'GET', 'PUT' ])
def post_post(post_id):
    if request.method == 'GET':
        post = Post.objects(id=post_id).get()
        return jsonify(post)