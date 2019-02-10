from flask import request, jsonify
from flask_mongoengine.wtf import model_form
from flask_login import login_user, logout_user, login_required, current_user

from blogan.blueprints.api import api_bp
from blogan.models import User
from blogan.utils.tools import json2formdata

@api_bp.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return jsonify('success.')

    user_form = model_form(User)
    json_data = request.json
    form = user_form(json2formdata(json_data))
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        remember = form.remember.data
        user = User.objects(name=username).first()
        if user:
            if username == user.name and user.validate_password(password):
                login_user(user, remember)
                return jsonify(user)
    return jsonify('failed.'), 403

@api_bp.route('/register', methods=['POST'])
def register():
    if current_user.is_authenticated:
        return jsonify('please logout first.')

    user_form = model_form(User)
    json_data = request.json
    form = user_form(json2formdata(json_data))
    if form.validate_on_submit():
        new_user = User(**form.data)
        try:
            new_user.save()
        except Exception as e:
            return jsonify({'errmsg:': str(e)}), 500
        return jsonify(new_user)
    else:
        return jsonify(form.errors), 400

@api_bp.route('/logout')
@login_required
def logout():
    logout_user()
