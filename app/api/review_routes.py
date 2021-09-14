from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, request
from sqlalchemy.sql.functions import user
from datetime import date, datetime
from flask_login import login_required, current_user
from app.models import User, db, Review
from app.forms import ReviewForm, ReviewFormEdit


review_routes = Blueprint('reviews', __name__)

@review_routes.route('/')
def reviews():
    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}

@review_routes.route('/<int:id>')
def one_review(id):
    review = Review.query.get(id)
    return {review.to_dict()['id']: review.to_dict()}

@review_routes.route('/add', methods = ['POST'])
@login_required
def create_review():
    form = ReviewForm()
    print(form.data, "THIS IS A FORMMMMMMMMmMMMMMMMMMMMMM")
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            user_id=form.data['user_id'],
            boba_id=form.data['boba_id'],
            shop_id=form.data['shop_id'],
            rating=form.data['rating'],
            review=form.data['review'],
            picture=form.data['picture'],
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    else:
        return {'errors': form.errors}, 500

@review_routes.route('/update/<int:id>', methods=['PUT'])
@login_required
def update_review(id):
    
    form = ReviewFormEdit()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        res = Review.query.get(id)
        res.user_id=form.data['user_id']
        res.boba_id=form.data['boba_id']
        res.shop_id=form.data['shop_id']
        res.rating=form.data['rating']
        res.review=form.data['review']
        res.picture=form.data['picture']
        db.session.add(res)
        db.session.commit()
        return res.to_dict()
    else:
        print(form.errors, "THIS ISSSSS ERROR")
        return {'errors': form.errors}, 500

@review_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required 
def delete_review(id):
    review = Review.query.get(id)
    print(review, "THIS IS REVIEEWWWWWWWWWWWWWW")
    db.session.delete(review)
    db.session.commit()
    return {'message': 'Review Deleted'}




