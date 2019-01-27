from werkzeug import datastructures

def json2formdata(json):
    return datastructures.MultiDict(json)