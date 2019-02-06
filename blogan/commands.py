import click
from faker import Faker

from blogan import app
from blogan.models import Category, User, model_lst

def create_root_category():
    Category.objects.delete()
    root_category = Category(
        name='root',
        father='-1',
        type=0,
        url='',
        level=0,
        children=[]
    )
    root_category.save()

def create_admin_user():
    User.objects.delete()
    admin = User(
        name='admin',
        password='admin',
        type=10,
        gold=100000
    )
    admin.save()

fake = Faker()
@app.cli.command()
@click.option('--drop', is_flag=True, help='Create after drop.')
def initdb(drop):
    """Initialize the database."""
    if drop:
        click.confirm('This operation will delete the database, do you want to continue?', abort=True)
        for mdl in model_lst:
            mdl.objects.delete()
        click.echo('Drop tables.')

    create_admin_user()
    create_root_category()

    click.echo('Initialized database.')


def create_fake_categories(count):
    root_category = Category.objects.get(name='root')
    for i in range(count):
        name = fake.name()
        category = Category(
            name=name,
            father=str(root_category.id),
            type=0,
            url=name,
            level=1,
            children=[],
            showFlag=1
        )
        category.save()
        root_category.children.append(str(category.id))
        root_category.save()

@app.cli.command()
@click.option('--count', default=20, help='Quantity of messages, default is 20.')
def forge(count):
    """Generate fake messages."""

    fake = Faker()
    click.echo('Working...')

    click.echo('Created %d categories.' % count)

@app.cli.command()
@click.option('--collection', default='category', help='show all datas of collections.')
def show(collection):
    """Generate fake messages."""
    fake = Faker()
    click.echo('Working...')

    count = 0
    click.echo('show %d categories.' % count)
