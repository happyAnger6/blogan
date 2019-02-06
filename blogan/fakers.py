from faker import Faker

from blogan.models import User, Category, Post

def fake_user_admin():
    admin = User(
        name='admin',
        type=10,
        gold=100000
    )
    admin.set_password('blogan')
    admin.save()

def fake_category_root():
    root_category = Category(
        name='root',
        father='-1',
        type=0,
        url='',
        level=0,
        children=[],
        showFlag=0
    )
    root_category.save()