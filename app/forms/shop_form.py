from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, TextAreaField, TextField
from wtforms.validators import DataRequired

class ShopForm(FlaskForm):
    user_id = IntegerField()
    name = StringField('Name', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    website = StringField('Website', validators=[DataRequired()])
    yelp_link = StringField('Yelp Link', validators=[DataRequired()])
    icon = StringField('Picture', validators=[DataRequired()])
    
