from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask('blogan')
app.config.from_pyfile('settings.py')

db = SQLAlchemy(app)

from blogan import commands