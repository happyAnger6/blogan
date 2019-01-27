import os
import sys

MONGODB_SETTINGS = {
    'db': 'local',
    'host': 'localhost',
    'port': 27017
}

WTF_CSRF_ENABLED=False
DEBUG_TB_PANELS = 'flask_mongoengine.panels.MongoDebugPanel'
SECRET_KEY = os.getenv('SECRET_KEY', 'blogan')