from app.seeds.reviews import seed_reviews
from flask.cli import AppGroup
from .users import seed_users, undo_users
from .shops import seed_shops, undo_shops
from .bobas import seed_bobas, undo_bobas
from .reviews import seed_reviews, undo_reviews

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_shops()
    seed_bobas()
    seed_reviews()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_shops()
    undo_bobas()
    undo_reviews()
    