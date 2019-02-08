from flask_login import login_user, logout_user, login_required, current_user

from blogan.blueprints.api import api_bp
from blogan.models import User

@api_bp.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('blog.index'))

    form = LoginForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        remember = form.remember.data
        admin = User.query.first()
        if admin:
            if username == admin.username and admin.validate_password(password):
                login_user(admin, remember)


@api_bp.route('/logout')
@login_required
def logout():
    logout_user()
