from flask import Flask
from flask_mongoengine import MongoEngine

app = Flask('blogan')
app.config.from_pyfile('settings.py')

db = MongoEngine(app)
from blogan.blueprints import api_bp
app.register_blueprint(api_bp, url_prefix='/api')

from blogan import commands, models, views