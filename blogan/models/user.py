import datetime

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from blogan.extensions import db

class User(db.Document, UserMixin):
   name = db.StringField(required=True, unique=True)
   realname = db.StringField()
   password = db.StringField()
   password_hash = db.StringField()
   email = db.StringField()
   type = db.IntField() #0-normal 1-visitor 2-registered 10-admin
   gold = db.IntField()
   register_time = db.DateTimeField(default=datetime.datetime.utcnow)
   gender = db.IntField()
   school = db.StringField()
   company = db.StringField()
   birthday = db.StringField()
   occupation = db.StringField() #职业

   def set_password(self, password):
      self.password_hash = generate_password_hash(password)

   def validate_password(self, password):
      return check_password_hash(self.password_hash, password)

   def json_ret(self):
      return {'name': self.name, 'realname':self.realname, 'type': self.type, 'gold': self.gold};