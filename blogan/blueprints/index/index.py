from flask import render_template
from blogan.blueprints.index import index_bp

@index_bp.route('/')
def home():
    return render_template('index.html');