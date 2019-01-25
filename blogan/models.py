import datetime

from blogan import db

class UserInfo(db.EmbeddedDocument):
    gender = db.IntField()
    school = db.StringField()
    company = db.StringField()
    birthday = db.StringField()
    occupation = db.StringField() #职业

class User(db.Document):
   name = db.StringField(required=True)
   realname = db.StringField()
   password = db.StringField()
   email = db.StringField()
   type = db.IntField() #0-normal 1-visitor 2-registered 10-admin
   gold = db.IntField()
   register_time = db.DateTimeField(default=datetime.datetime.utcnow)
   info = db.EmbeddedDocumentField(UserInfo)

class Category(db.Document):
    name = db.StringField(required=True)
    father = db.StringField()
    type = db.IntField()
    url = db.StringField()
    level = db.IntField()
    children = db.ListField(db.StringField())
    showFlag = db.IntField()

class Comment(db.EmbeddedDocument):
    author = db.StringField()
    content = db.StringField()
    publish_data = db.DateTimeField(default=datetime.datetime.utcnow)
    showFlag = db.IntField(default=1)
    comments = db.ListField(db.StringField())

class Post(db.Document):
    title = db.StringField(required=True)
    content = db.StringField()
    category = db.StringField()
    chaper = db.IntField()
    section = db.IntField()
    author = db.ReferenceField(User, reverse_delete_rule=db.CASCADE)
    publish_data = db.DateTimeField(default=datetime.datetime.utcnow)
    tags = db.ListField(db.StringField())
    comments = db.ListField(db.EmbeddedDocumentField(Comment))
    type = db.IntField()
    showFlag = db.IntField()

model_lst = [ UserInfo, User, Category, Post, Comment ]
