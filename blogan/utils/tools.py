from werkzeug import datastructures

def json2formdata(json):
    return datastructures.MultiDict(json)

def updateCategoryModel(model, form):
    for k in form:
        value = form[k]
        if value:
            if k == 'name':
                model.update(name = value)
            elif k == 'level':
                model.update(level = value)
            elif k == 'url':
                model.update(url = value)
            elif k == 'showFlag':
                model.update(showFlag = value)
