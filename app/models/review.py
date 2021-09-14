from .db import db
from sqlalchemy.sql import func

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column (db.Integer, db.ForeignKey('users.id'), nullable=False)
    boba_id = db.Column (db.Integer, db.ForeignKey('bobas.id'), nullable=False) 
    shop_id = db.Column (db.Integer, db.ForeignKey('shops.id'), nullable=False) 
    rating = db.Column (db.Integer, nullable=False)
    review = db.Column(db.Text, nullable=True)
    picture = db.Column(db.String, nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    user = db.relationship('User', back_populates='review', lazy=True)
    boba = db.relationship('Boba', back_populates='review', lazy=True)
    shop = db.relationship('Shop', back_populates='review', lazy=True)

    def to_dict(self): 
        return {
            'id': self.id,
            'user_id': self.user_id,
            'boba_id': self.boba_id,
            'shop_id': self.shop_id,
            'rating': self.rating,
            'review': self.review,
            'picture': self.picture,
            'username': self.user.username,
            'boba': self.boba.name,
            'shop': self.shop.name,
            'user_icon': self.user.icon,
            'boba_icon': self.boba.icon,
            'date': self.created_at
        }