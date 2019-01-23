from blogan import db

class Category(db.Document):
    pass

class Category(db.Document):
    name = db.StringField(required=True)
    father = db.StringField()
    type = db.IntField()
    url = db.StringField()
    level = db.IntField()
    children = db.ListField(db.StringField())
    flag = db.IntField()

model_lst = [Category]
