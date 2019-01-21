from flask import Flask
from flask_mongoengine import MongoEngine

app = Flask('blogan')
app.config.from_pyfile('settings.py')

db = MongoEngine(app)

from blogan import commands, models, views