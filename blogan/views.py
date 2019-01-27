from blogan import app

@app.route('/')
def index():
    return '<h1>Hello blogan!</h1>'


