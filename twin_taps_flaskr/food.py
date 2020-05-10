import functools

from flask import Blueprint, jsonify
from flask_cors import CORS
from twin_taps_flaskr.db import get_db

bp = Blueprint('food', __name__, url_prefix='/api/food')
CORS(bp)

# api route to render a json list of beers
@bp.route('/', methods=(["GET"]))
def index():
    # get db connection
    db = get_db()

    # execute sql to get beers read in from the database
    queryResult = db.execute('SELECT * FROM twin_taps_food')
    rows = queryResult.fetchall()

    foodJSON = []
    for row in rows:
        # Append an object to our json list, that has an id and name key from the database row
        foodJSON.append({ "id": row['id'], "name": row['name'] })

    # render json that has a list of beers
    return jsonify(data = { "food": foodJSON })
