import random

from mongoengine.errors import NotUniqueError
from faker import Faker

from blogan.models import User, Category, Post

fake = Faker()

def fake_user_admin(username, password):
    admin = User(
        name=username,
        type=10,
        gold=100000
    )
    admin.set_password(password)
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

def fake_category_categories(count=10, subcount=20):
    root_category = Category.objects.get(name='root')
    for i in range(count):
        name = fake.word()
        category = Category(
            name=name,
            father=str(root_category.id),
            type=0,
            url='category/' + name,
            level=1,
            children=[],
            showFlag=1
        )
        try:
            category.save()
            root_category.children.append(str(category.id))
            root_category.save()
        except NotUniqueError as e:
            print('add category:%s error:%s' % (name, str(e)))

    father_categories = Category.objects(level=1)
    count = len(father_categories)
    for i in range(subcount):
        name = fake.word()
        father_index = random.randint(0, count-1)
        father_category = father_categories[father_index]
        category = Category(
            name=name,
            father=str(father_category.id),
            type=0,
            url=father_category.url + '/' + name,
            level=2,
            children=[],
            showFlag=1
        )
        try:
            category.save()
            father_category.children.append(str(category.id))
            father_category.save()
        except NotUniqueError as e:
            print('add sub-category:%s error:%s' % (name, str(e)))

def fake_posts(count=50):
    for i in range(count):
        categories = Category.objects
        post = Post(
            title=fake.sentence(),
            content=fake.text(1200),
            category=str(categories[random.randint(0, len(categories)-1)].id),
            publish_data=fake.date_time_this_year()
        )
        post.save()

