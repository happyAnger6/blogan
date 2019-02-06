import datetime

from blogan.extensions import db
from blogan.models.user import User
from blogan.models.category import Category

class Comment(db.EmbeddedDocument):
    author = db.StringField()
    content = db.StringField()
    publish_data = db.DateTimeField(default=datetime.datetime.utcnow)
    showFlag = db.IntField(default=1)
    comments = db.ListField(db.ReferenceField('self'))

class Post(db.Document):
    title = db.StringField(required=True)
    content = db.StringField()
    category = db.ReferenceField(Category, reverse_delete_rule=db.CASCADE)
    chaper = db.IntField()
    section = db.IntField()
    author = db.ReferenceField(User, reverse_delete_rule=db.CASCADE)
    publish_data = db.DateTimeField(default=datetime.datetime.utcnow)
    tags = db.ListField(db.StringField())
    comments = db.ListField(db.EmbeddedDocumentField(Comment))
    type = db.IntField(default=0) #0=original 1=reprint
    showFlag = db.IntField(defalt=1) #0-hidden 1=show