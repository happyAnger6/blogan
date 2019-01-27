import unittest

from flask import abort

from blogan import app, db
from blogan.models import Category, Post, User, UserInfo
from blogan.commands import forge, initdb


class BlogAnTestCase(unittest.TestCase):

    def setUp(self):
        app.config.update(
            TESTING=True,
            WTF_CSRF_ENABLED=False,
        )
        self.client = app.test_client()
        self.runner = app.test_cli_runner()

    def tearDown(self):
        pass

    def test_app_exist(self):
        self.assertFalse(app is None)

    def test_app_is_testing(self):
        self.assertTrue(app.config['TESTING'])

    def test_index_page(self):
        response = self.client.get('/')
        data = response.get_data(as_text=True)
        self.assertIn('blogan', data)

    def test_get_categories(self):
        response = self.client.get('/category')
        self.assertTrue(response.is_json)

    def test_create_category(self):
        from faker import Faker
        fake = Faker()
        name = fake.name()
        response = self.client.put('/category', data=dict(
            name=name,
            url='category/' + name
        ), follow_redirects=True)
        data = response.get_data(as_text=True)
        self.assertIn('success.', data)

    def test_create_post(self):
        r_c = Category.objects(name='root').get()
        admin = User.objects(name='admin').get()
        response = self.client.put('/post', data=dict(
            title='first blog.',
            url='category/test1',
            category=r_c.id,
            user=admin.id
        ), follow_redirects=True)
        data = response.get_data(as_text=True)
        self.assertIn('success.', data)

    def test_get_posts(self):
        response = self.client.get('/post')
        self.assertTrue(response.is_json)

    def test_get_one_post(self):
        response = self.client.get('/post/5c4d61e45f627d023570094b')
        data = response.get_json()
        self.assertIn('first blog', data['title'])




if __name__ == '__main__':
    unittest.main()