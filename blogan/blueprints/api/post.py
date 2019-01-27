from flask import request, jsonify
from flask_mongoengine.wtf import  model_form

from blogan.blueprints import api_bp
from blogan.models import Post, Category, User

@api_bp.route('/post', methods = ['GET', 'PUT'])
def post():
    if request.method == 'GET':
        posts = Post.objects
        return jsonify(posts)
    elif request.method == 'PUT':
        post_form = model_form(Post)
        data = request.form
        form = post_form(request.form)
        if form.validate():
            category_id = data['category']
            user_id = data['user']
            category = Category.objects(id=category_id).get()
            author = User.objects(id=user_id).get()
            form.data.update({'category': category, 'author':author})
            new_post=Post(**form.data)
            new_post.save()
            return 'success.'
        else:
            return 'failed.'

@api_bp.route('/post/<string:post_id>', methods = [ 'GET', 'POST' ])
def post_post(post_id):
    if request.method == 'GET':
        post = Post.objects(id=post_id).get()
        return jsonify(post)