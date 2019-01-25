import datetime

from blogan import db

class User(db.Document):
   name = db.StringField(required=True)
   email = db.StringField()
   type = db.IntField()
   gold = db.IntField()
   register_time = db.DateTimeField(default=datetime.datetime.utcnow)

class Category(db.Document):
    name = db.StringField(required=True)
    father = db.StringField()
    type = db.IntField()
    url = db.StringField()
    level = db.IntField()
    children = db.ListField(db.StringField())
    showFlag = db.IntField()

class Comment(db.Document):
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
    author = db.StringField()
    publish_data = db.DateTimeField(default=datetime.datetime.utcnow)
    tags = db.ListField(db.StringField())
    comments = db.ListField(db.EmbeddedDocumentField(Comment))
    type = db.IntField()
    showFlag = db.IntField()

model_lst = [Category]
