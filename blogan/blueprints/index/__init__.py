from flask import Blueprint

index_bp = Blueprint('index', __name__)

from blogan.blueprints.index import index