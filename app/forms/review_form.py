from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, TextAreaField, TextField
from wtforms.validators import DataRequired
from app.models import Review

class ReviewForm (FlaskForm):
    user_id = IntegerField()
    boba_id = IntegerField(validators=[DataRequired(message='Please select a boba')])
    shop_id = IntegerField(validators=[DataRequired(message='Please select a shop')])
    rating = IntegerField('rating', validators=[DataRequired(message='Please give it a rating from 1 to 5')])
    review = TextAreaField('review')
    picture = StringField('picture')



    

