import click
from faker import Faker

from blogan import app, db
from blogan.models import Category, model_lst

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
    Category.objects.delete()
    root_category = Category(
        name=fake.name(),
        father=-1,
        type=0,
        url='',
        level=0,
        children=[]
        )
    root_category.save()
    click.echo('Initialized database.')


@app.cli.command()
@click.option('--count', default=20, help='Quantity of messages, default is 20.')
def forge(count):
    """Generate fake messages."""

    #db.drop_all()
    #db.create_all()

    fake = Faker()
    click.echo('Working...')

    root_category = Category.objects(father=-1)
    for i in range(count):
        name = fake.name()
        category = Category(
            name=name,
            father=root_category.id,
            type=0,
            url=name,
            level=1,
            children=[]
        )
        category.save()
        #db.session.add(message)

    #db.session.commit()
    click.echo('Created %d fake messages.' % count)

@app.cli.command()
@click.option('--collection', default='category', help='show all datas of collections.')
def show(collection):
    """Generate fake messages."""

    #db.drop_all()
    #db.create_all()

    fake = Faker()
    click.echo('Working...')

    count = 0
    for c in Category.objects():
        count+=1
        print(c)
        #db.session.add(message)

    #db.session.commit()
    click.echo('show %d categories.' % count)
