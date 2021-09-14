from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='Demo',
        username='Demo', email='demo@aa.io', password='password', icon='https://image.flaticon.com/icons/png/512/141/141783.png')
    marnie = User(
        first_name="Marnie", last_name="Smith",
        username='marnie', email='marnie@aa.io', password='password', icon='https://image.flaticon.com/icons/png/128/780/780258.png')
    bobbie = User(
        first_name="Bobbie", last_name="Li",
        username='bobbie', email='bobbie@aa.io', password='password', icon='https://cdn0.iconfinder.com/data/icons/white-cat-emoticon-filled/64/cute_cat_kitten_face_avatar-27-512.png')
    david = User(
        first_name="David", last_name="Lam",
        username='David', email='david@aa.io', password='password', icon='https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png')
    vivian = User(
        first_name="Vivian", last_name="Yu",
        username='Vivian', email='vivian@aa.io', password='password', icon='https://cdn-icons-png.flaticon.com/512/826/826963.png')
    javier = User(
        first_name="Javier", last_name="Orti",
        username='Javier', email='javier@aa.io', password='password', icon='https://icon-library.com/images/icon-panda/icon-panda-18.jpg')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(david)
    db.session.add(vivian)
    db.session.add(javier)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
