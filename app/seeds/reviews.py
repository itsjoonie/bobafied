from app.models import db, Review

def seed_reviews():
    r1 = Review(user_id=1, boba_id=1, shop_id=1, rating=5, review='wow such amazing flavor! you can really taste the jasmine!', picture='https://images.squarespace-cdn.com/content/v1/5e8840afd65f745da4030ca8/1613869435127-QZNO7ZURPQNDJWGQNSV7/Brown-sugar-boba-tea.jpg')
    
    r2 = Review(user_id=2, boba_id=2, shop_id=2, rating=4, review='The flavor is really strong, but it still taste amazing.', picture ='https://images.squarespace-cdn.com/content/v1/58d1f7308419c23d328cdb22/1559900761760-BM56M3GQKXMWCKNT4LST/Brown+Sugar+Bubble+Tea?format=1000w')

    db.session.add(r1)
    db.session.add(r2)
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;') 
    db.session.commit()