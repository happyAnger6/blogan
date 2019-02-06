from blogan.extensions import db

class Category(db.Document):
    name = db.StringField(required=True)
    father = db.ReferenceField('self')
    type = db.IntField(default=0) #0-normal 1-chapter
    url = db.StringField(required=True, unique=True)
    level = db.IntField(default=1) #0-root 1-level 1
    children = db.ListField(db.StringField())
    showFlag = db.IntField(default=1) #0-hidden 1-show