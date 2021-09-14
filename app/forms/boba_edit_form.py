from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, TextAreaField, TextField
from wtforms.validators import DataRequired, ValidationError
from app.models import Boba

# def boba_exists(form, field):
#     #checking if boba name exist
#     name = field.data
#     boba = Boba.query.filter(Boba.name == name).first()
#     if boba:
#         raise ValidationError('Boba already exist!')

class BobaEditForm(FlaskForm):
    user_id = IntegerField()
    name = StringField('name', validators=[DataRequired(message='Please fill out.')])
    flavor = StringField('flavor', validators=[DataRequired(message='Please select a flavor.')])
    tea_type= StringField('tea_type', validators=[DataRequired(message='Please select a flavor.')])
    drink_type = StringField('drink_type', validators=[DataRequired(message='Please select a flavor.')])
    description = TextAreaField('description', validators=[DataRequired(message='Please fill out.')])
    icon= StringField('icon')
