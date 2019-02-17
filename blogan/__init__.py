import os

import click
from flask import Flask
from flask_mongoengine import MongoEngine
from faker import Faker

from blogan.settings import config
from blogan.blueprints.api import api_bp
from blogan.blueprints.index import index_bp
from blogan.extensions import db, login_manager
from blogan.models import model_lst, User, Category, Post
from blogan import fakers

basedir = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))

def create_app(config_name=None):
    if config_name is None:
        config_name = os.getenv('FLASK_CONFIG', 'development')

    app = Flask('blogan')
    app.config.from_object(config[config_name])

    register_extensions(app)
    register_blueprints(app)
    register_commands(app)
    register_errors(app)
    register_shell_context(app, db)
    register_template_context(app)
    register_request_handlers(app)
    return app

def register_extensions(app):
    db.init_app(app)
    login_manager.init_app(app)

def register_blueprints(app):
    app.register_blueprint(api_bp, url_prefix='/api')
    app.register_blueprint(index_bp)

def register_shell_context(app, db):
    @app.shell_context_processor
    def make_shell_context():
        return dict(db=db, user=User, category=Category, post=Post)

def register_template_context(app):
    pass

def register_errors(app):
    pass

def register_commands(app):
    def drop_all():
        for mdl in model_lst:
            mdl.objects.delete()
            mdl.drop_collection()

    @app.cli.command()
    @click.option('--drop', is_flag=True, help='Create after drop.')
    def initdb(drop):
        """Initialize the database."""
        if drop:
            click.confirm('This operation will delete the database, do you want to continue?', abort=True)
            drop_all()
            click.echo('Drop tables.')

        click.echo('Initialized database.')

    @app.cli.command()
    @click.option('--username', prompt=True, help='The username used to login.')
    @click.option('--password', prompt=True, hide_input=True,
                  confirmation_prompt=True, help='The password used to login.')
    def init(username, password):
        """Building Bluelog, just for you."""

        click.echo('Initializing the database...')

        admin = User.objects(type=10).first()
        if admin is not None:
            click.echo('The administrator already exists, updating...')
            admin.name = username
            admin.set_password(password)
            admin.save()
        else:
            click.echo('Creating the temporary administrator account...')
            fakers.fake_user_admin(username, password)

        category = Category.objects.first()
        if category is None:
            click.echo('Creating the root category...')
            fakers.fake_category_root()

        click.echo('Done.')

    @app.cli.command()
    @click.option('--category', default=4, help='Quantity of categories, default is 10.')
    @click.option('--subcategory', default=20, help='Quantity of sub-categories, default is 20.')
    @click.option('--post', default=50, help='Quantity of posts, default is 50.')
    def forge(category, subcategory, post):

        drop_all()
        click.echo('Generating the administrator...')
        fakers.fake_user_admin('admin', 'admin')

        click.echo('Generating %d categories %d sub-categories...' % (category, subcategory))
        fakers.fake_category_root()
        fakers.fake_category_categories(category, subcategory)

        click.echo('Generating %d posts...' % post)
        fakers.fake_posts(post)

        click.echo('Done.')

def register_request_handlers(app):
    pass
