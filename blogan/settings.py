import os
import sys

basedir = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))

# SQLite URI compatible
WIN = sys.platform.startswith('win')
if WIN:
    prefix = 'sqlite:///'
else:
    prefix = 'sqlite:////'


class BaseConfig(object):
    SECRET_KEY = os.getenv('SECRET_KEY', 'blogan key')

    DEBUG_TB_INTERCEPT_REDIRECTS = False

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_RECORD_QUERIES = True

    CKEDITOR_ENABLE_CSRF = True
    CKEDITOR_FILE_UPLOADER = 'admin.upload_image'

    MAIL_SERVER = os.getenv('MAIL_SERVER')
    MAIL_PORT = 465
    MAIL_USE_SSL = True
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    MAIL_DEFAULT_SENDER = ('Blogan Admin', MAIL_USERNAME)

    BLOGAN_EMAIL = os.getenv('BLOGAN_EMAIL')
    BLOGAN_POST_PER_PAGE = 10
    BLOGAN_MANAGE_POST_PER_PAGE = 15
    BLOGAN_COMMENT_PER_PAGE = 15
    # ('theme name', 'display name')
    BLOGAN_THEMES = {'perfect_blue': 'Perfect Blue', 'black_swan': 'Black Swan'}
    BLOGAN_SLOW_QUERY_THRESHOLD = 1

    BLOGAN_UPLOAD_PATH = os.path.join(basedir, 'uploads')
    BLOGAN_ALLOWED_IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif']


class DevelopmentConfig(BaseConfig):
    WTF_CSRF_ENABLED = False
    MONGODB_SETTINGS = {
        'db': 'dev',
        'host': 'localhost',
        'port': 27017
    }


class TestingConfig(BaseConfig):
    MONGODB_SETTINGS = {
        'db': 'testing',
        'host': 'localhost',
        'port': 27017
    }
    TESTING = True
    WTF_CSRF_ENABLED = False


class ProductionConfig(BaseConfig):
    MONGODB_SETTINGS = {
        'db': 'prod',
        'host': 'localhost',
        'port': 27017
    }

config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig
}