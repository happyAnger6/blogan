from flask import request, jsonify
from flask_mongoengine.wtf import model_form
from flask_login import login_user, logout_user, login_required, current_user

from blogan.blueprints.api import api_bp
from blogan.models import User
from blogan.utils.tools import json2formdata

@api_bp.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return jsonify(current_user.json_ret())

    json_data = request.json
    if request.method == 'POST':
        username = json_data['username']
        password = json_data['password']
        remember = json_data['remeber']
        user = User.objects(name=username).first()
        if user:
            if username == user.name and user.validate_password(password):
                login_user(user, remember)
                return jsonify(user.json_ret())
        else:
            return jsonify("user %s doesn't exist!" %(username)), 403
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

@api_bp.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify('logout success.')
