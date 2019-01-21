import os
import sys

MONGODB_SETTINGS = {
    'db': 'local',
    'host': 'localhost',
    'port': 27017
}

SECRET_KEY = os.getenv('SECRET_KEY', 'blogan')