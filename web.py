from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/data', methods=['POST'])
def handle_data():
    encoded = request.form['datauri']
    print(encoded)
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)