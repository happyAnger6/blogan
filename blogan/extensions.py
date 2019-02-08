from flask_mongoengine import MongoEngine
from flask_login import LoginManager

db = MongoEngine()
login_manager = LoginManager()

@login_manager.user_loader
def load_user(user_id):
    from blogan.models import User
    user = User.objects(id=user_id).first()
    return user