from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tajmahal.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Booking(db.Model):
    id      = db.Column(db.Integer, primary_key=True)
    name    = db.Column(db.String(100), nullable=False)
    phone   = db.Column(db.String(20),  nullable=False)
    email   = db.Column(db.String(120))
    service = db.Column(db.String(50),  nullable=False)
    acBrand = db.Column(db.String(50))
    date    = db.Column(db.String(30),  nullable=False)
    message = db.Column(db.Text)
    status  = db.Column(db.String(20), default='pending')

@app.route('/')
def index():
    return "Welcome to Taj Mahal AC Service API"

@app.route('/api/health')
def health():
    return jsonify({"status": "ok"})

@app.route('/api/bookings', methods=['POST'])
def create_booking():
    data = request.get_json()
    if not data.get('name') or not data.get('phone'):
        return jsonify({"error": "Name and Phone required"}), 400
    booking = Booking(
        name=data['name'], phone=data['phone'],
        email=data.get('email',''), service=data.get('service',''),
        acBrand=data.get('acBrand',''), date=data.get('date',''),
        message=data.get('message','')
    )
    db.session.add(booking)
    db.session.commit()
    return jsonify({"success": True, "message": "Booking received!"}), 201

@app.route('/api/bookings', methods=['GET'])
def get_bookings():
    bookings = Booking.query.order_by(Booking.id.desc()).all()
    return jsonify([{
        "id": b.id, "name": b.name, "phone": b.phone,
        "service": b.service, "status": b.status
    } for b in bookings])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)