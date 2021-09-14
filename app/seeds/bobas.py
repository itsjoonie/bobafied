from app.models import db, Boba

def seed_bobas():

    b1 = Boba(user_id=2, name="Jasmine Green Milk Tea", flavor="Jasmine", tea_type="Green Tea", drink_type="Milk Tea", description="A fragrant and delicate brew, paired with the rich creaminess of milk tea. Have this drink made in your choice of Signature Milk Tea, Fresh Milk or Oat Milk.", icon="https://raw.githubusercontent.com/itsjoonie/Bobafied/main/image/Jasmine-Green-Milk-Tea-Boba-by-Eva-Kosmas-Flores-7.jpeg")

    b2 = Boba(user_id=2, name="Brown Sugar Milk Tea", flavor="Brown Sugar", tea_type="None", drink_type="Milk Tea", description='This confectionery drink originated from Taiwan and quickly became famous worldwide, with queues lasting for hours. The trademark "tiger sugar" is coined because of the tiger stripes formation on the cup due to the brown sugar syrup drips. Despite this drink being called a milk tea, it is somewhat a misnomer as it has no actual tea on it! I reckon that it is because of its association with Bubble tea, which also originated from the same country', icon="https://raw.githubusercontent.com/itsjoonie/Bobafied/main/image/brown-sugar-milk.jpeg")

    b3 = Boba(user_id=1, name="Hokkaido Milk Tea",
    flavor="Hokkaido", tea_type="Black Tea", drink_type="Milk Tea", description="Hokkaido milk tea is made of black tea leaves with milk — traditionally from fresh milk produced in the Hokkaido province. The tea is made using high-quality black tea leaves including Assam, Darjeeling, and Earl Grey varieties. The tea is often sweetened with caramel syrup or brown sugar.", icon="https://raw.githubusercontent.com/itsjoonie/Bobafied/main/image/Hokkaido_milk_tea.jpeg")

    # Boba(user_id=, name=, flavor=, tea_type=, drink_type=, description=, icon=, )


    db.session.add(b1)
    db.session.add(b2)
    db.session.add(b3)

    db.session.commit()


def undo_bobas():
    db.session.execute('TRUNCATE bobas RESTART IDENTITY CASCADE;') 
    db.session.commit()
