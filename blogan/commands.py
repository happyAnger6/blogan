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
        name='root',
        father='-1',
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
            flag=0
        )
        category.save()
        root_category.children.append(str(category.id))
        #db.session.add(message)

    root_category.save()
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
    r = Category.objects().get(name='root')
    for child in r.children:
        c = Category.objects.get(id=child)
        print(c.name, c.id)
        count += 1
        #db.session.add(message)

    #db.session.commit()
    click.echo('show %d categories.' % count)
