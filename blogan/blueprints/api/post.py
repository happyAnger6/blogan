from flask import request, jsonify
from flask_mongoengine.wtf import  model_form

from blogan.blueprints import api_bp
from blogan.models import Post, Category, User
from blogan.utils.tools import json2formdata

@api_bp.route('/post', methods = ['GET', 'POST'])
def post():
    if request.method == 'GET':
        posts = Post.objects
        print('aaa',posts)
        return jsonify(posts)
    elif request.method == 'POST':
        post_form = model_form(Post)
        data = request.json
        user_name = data['author']
        author = User.objects(name=user_name).get()
        data.update({'author': author.id})
        form = post_form(json2formdata(data))
        if form.validate():
            category_id = data['category']
            data.update({'category': category_id})
            new_post=Post(**data)
            new_post.save()
            return jsonify('success.')
        else:
            print(form.errors)
            return jsonify('failed.')

@api_bp.route('/post/<string:post_id>', methods = [ 'GET', 'PUT' ])
def post_post(post_id):
    if request.method == 'GET':
        post = Post.objects(id=post_id).get()
        return jsonify(post)