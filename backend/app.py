from flask import Flask, request, jsonify
from data import get_data

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World! This is the backend of the Flask app.'

@app.route('/api', methods=['GET', 'POST'])
def api():
    if request.method == 'POST':
        data = request.json
        print(f"Received from frontend: {data}")
        return jsonify({
            'status': 'success',
            'received': data
        })
    else:
        data = get_data()
        return jsonify({'data': data})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
