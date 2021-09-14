from app.models import db, Shop

def seed_shops():

    shop1 = Shop(user_id=2, name='Bubble Crush', city='Monterey Park', state='CA', website='https://www.bubblecrushca.com/', icon='https://raw.githubusercontent.com/itsjoonie/Bobafied/main/image/shops/bubbleCrush.png')
    shop2 = Shop(user_id=2, name='Boba Guys', city='San Francisco', state="CA", website='https://www.bobaguys.com/', icon='https://github.com/itsjoonie/Bobafied/tree/main/image/shops')
    shop3 = Shop(user_id=2, name='Little Sweet', city='San Francisco', state='CA', website='https://www.little-sweet.com/', icon='https://www.vnyzy.com/wp-content/uploads/2017/11/little-sweet-storefront-1024x768.jpg')
    shop3 = Shop(user_id=2, name='Half & Half', city='Multiple Location', state='CA', website='http://www.halfandhalfteaexpress.com/', icon='https://pbs.twimg.com/profile_images/498953833779712000/a3vNzszJ_400x400.jpeg')
    shop4 = Shop(user_id=2, name='Quickly', city='Multiple Location', state='CA', website='http://www.quicklyusa.com/', icon='https://menufyproduction.imgix.net/636689196232054989+56398.png?auto=compress,format&h=1080&w=1920&fit=max')
    shop5 = Shop(user_id=2, name='Tastea', city='Multiple Location', state='CA', website='https://gotastea.com/', icon='https://pbs.twimg.com/profile_images/1319756276499296256/xR0XJrgt.jpg')
    shop6 = Shop(user_id=2, name='7Leaves', city='Multiple Location', state='CA', website='https://7leavescafe.com/',icon='https://cdn.vox-cdn.com/thumbor/4hN-TVrFZVCOnYqpPKRDfFH6ieU=/0x0:769x960/1200x800/filters:focal(358x374:480x496)/cdn.vox-cdn.com/uploads/chorus_image/image/62720046/7_Leaves_Cafe.0.jpg')
    shop7 = Shop(user_id=2 , name='Bubbleology', city='New York City', state='NY', website='https://bubbleologyusa.com/',icon='https://accordingtoalicex.com/wp-content/uploads/2020/10/20201005_133647-1440x1920.jpg')
    shop8 = Shop(user_id=2 , name='Ten Ren', city= 'Multiple Location', state='NY', website='https://www.tenren.com/' ,icon='https://s.yimg.com/aah/tenrentea/earl-grey-tea-bags-48.png')
    


    # Shop(user_id= , name=, city=, state=, website=,icon=)

    db.session.add(shop1)
    db.session.add(shop2)
    db.session.add(shop3)
    db.session.add(shop4)
    db.session.add(shop5)
    db.session.add(shop6)
    db.session.add(shop7)
    db.session.add(shop8)

    db.session.commit()

def undo_shops():
    db.session.execute('TRUNCATE shops RESTART IDENTITY CASCADE;') 
    db.session.commit()