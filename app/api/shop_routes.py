from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, request
from sqlalchemy.sql.functions import user
from flask_login import login_required, current_user
from app.models import User, db, Shop
from app.forms import ReviewForm

shop_routes = Blueprint('shops', __name__)

@shop_routes.route('/')
def shops():
    shops = Shop.query.all()
    return {'shops':[shop.to_dict() for shop in shops]}
