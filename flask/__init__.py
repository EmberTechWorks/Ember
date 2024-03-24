from flask import Flask
from flask_socketio import SocketIO
from .main import handle_message

app = Flask(__name__)
socketio = SocketIO(app)
socketio.on('message')(handle_message)