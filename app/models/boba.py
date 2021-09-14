from .db import db
from sqlalchemy.sql import func

class Boba(db.Model):
    __tablename__= 'bobas'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(300), unique=True)
    flavor = db.Column(db.String(50), nullable=False)
    tea_type = db.Column(db.String(50), nullable=False)
    drink_type = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    icon = db.Column(db.String)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    user = db.relationship('User', back_populates='boba', lazy=True)
    review = db.relationship('Review', back_populates="boba", lazy=True, cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'flavor': self.flavor,
            'tea_type': self.tea_type,
            'drink_type': self.drink_type,
            'description': self.description,
            'icon': self.icon
        }

