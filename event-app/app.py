from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = "secretkey"

users = []

@app.route("/", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        if not email or not password:
            flash("All fields are required!", "error")
            return redirect(url_for("register"))

        user = {"email": email, "password": password}
        users.append(user)

        flash("Registration successful!", "success")
        return redirect(url_for("register"))

    return render_template("register.html", users=users)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)