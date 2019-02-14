from flask import Blueprint
from flask_cors import CORS

api_bp = Blueprint('api', __name__)
CORS(api_bp, supports_credentials=True)

from blogan.blueprints.api import category, post, auth