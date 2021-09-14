from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, request
from sqlalchemy.sql.functions import user
from flask_login import login_required, current_user
from app.models import User, db, Boba
from app.forms import BobaForm, BobaEditForm


boba_routes = Blueprint('bobas', __name__)

# Get all Bobas
@boba_routes.route('/')
# @login_required # <-- uncomment this line to require login after finishing testing api on postman
def bobas():
    bobas = Boba.query.all()
    return {'bobas': [boba.to_dict() for boba in bobas]}
    # return {boba.to_dict()['id']: boba.to_dict() for boba in bobas}

# Get one Boba
@boba_routes.route('/<int:id>')
# @login_required
def one_boba(id):
    boba = Boba.query.get(id)
    print(bobas, 'WHAT IS THIS')
    return {boba.to_dict()['id']: boba.to_dict()}

# Create a boba
@boba_routes.route('/add', methods=['POST'])
@login_required
def create_boba():
    form = BobaForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        boba = Boba(
            user_id=form.data['user_id'],
            name=form.data['name'],
            flavor=form.data['flavor'],
            tea_type=form.data['tea_type'],
            drink_type=form.data['drink_type'],
            description=form.data['description'],
            icon=form.data['icon'],
        )
        db.session.add(boba)
        db.session.commit()
        return boba.to_dict()
    else: 
        return {'errors': form.errors}, 500
    # return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# edit a boba
@boba_routes.route('/<int:id>/update', methods=['PUT'])
@login_required
def update_boba(id):
    
    form = BobaEditForm()
    print(form.data, "THIS FORMMMMM DATAAA")

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        boba = Boba.query.get(id)
        boba.user_id=form.data['user_id']
        boba.name=form.data['name']
        boba.flavor=form.data['flavor']
        boba.tea_type=form.data['tea_type']
        boba.drink_type=form.data['drink_type']
        boba.description=form.data['description']
        boba.icon=form.data['icon']
        db.session.add(boba)
        db.session.commit()
        return boba.to_dict()
    else:
        print(form.errors, "THIS ISSSSS ERROR")
        return {'errors': form.errors}, 500
    
    # if form.validate_on_submit() and current_user.id == res.user_id: 
    # boba.user_id=form.data['user_id']
    # boba.name=form.data['name']
    # boba.flavor=form.data['flavor']
    # boba.tea_type=form.data['tea_type']
    # boba.drink_type=form.data['drink_type']
    # boba.description=form.data['description']
    # boba.icon=form.data['icon']

  
    
    

# delete boba
@boba_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_boba(id):
    boba = Boba.query.get(id)
    print(boba, "HELLLOOOOOO BOBAAAAAAAAaAAAAAAAAAAAAAAAAAAA")
    # if (Boba.user_id == current_user.id):
    db.session.delete(boba)
    db.session.commit()
    return {'message': 'Boba deleted'}
    # else:
    #     return {'message': 'No'}







