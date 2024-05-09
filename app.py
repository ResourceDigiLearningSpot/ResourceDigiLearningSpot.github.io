from flask import Flask, render_template, request
import io
import sys

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/compile', methods=['POST'])
def compile():
    code = request.form['code']
    # Redirect stdout to an in-memory buffer
    sys.stdout = io.StringIO()
    # Execute the code
    try:
        exec(code)
        output = sys.stdout.getvalue()
    except Exception as e:
        output = str(e)
    # Reset stdout
    sys.stdout = sys.__stdout__
    return output

if __name__ == '__main__':
    app.run(debug=True)
