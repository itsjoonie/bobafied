from .db import db
from sqlalchemy.sql import func

class Shop(db.Model):
    __tablename__ = 'shops'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String(100), unique=True, nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    website = db.Column(db.String)
    yelp_link = db.Column(db.String)
    icon = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    
    user = db.relationship("User", back_populates="shop", lazy=True)
    review = db.relationship('Review', back_populates='shop', lazy=True)

    def to_dict(self):
        return{
            'id': self.id,
            'name': self.name,
            'city': self.city,
            'state': self.state,
            'website': self.website,
            'yelp_link': self.yelp_link,
            'icon': self.icon
        }
