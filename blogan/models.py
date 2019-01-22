from blogan import db

class Category(db.Document):
    pass

class Category(db.Document):
    name = db.StringField(required=True)
    father = db.ReferenceField(Category)
    type = db.IntField()
    url = db.StringField()
    level = db.IntField()
    children = db.ListField(db.ReferenceField(Category))
