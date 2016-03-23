
export default class LoginForm {

  constructor(form, email) {
    this.form = form;
    this.validCreds = [
      { eMail: `aaron@theironyard.com`, passWord: `password123` },
      { eMail: `admin@google.com`, passWord: `pandas` },
      { eMail: email, passWord: `honeycrisp` },
    ];
    this.form.addEventListener(`click`, (ev) => {
      ev.preventDefault();
      this.validateInputs();
    });
  }

  validate(username, password) {
    return this.validCreds.reduce((good, currentUser) => {
      if (currentUser.eMail === username && currentUser.passWord === password) {
        return true;
      }
      return good;
    }, false);
  }

  validateInputs() {
    const validationMessage = this.form.querySelector(`.login-form__validation-message`);
    const emailInput = this.form.querySelector(`.login-form__email`).value;
    const passwordInput = this.form.querySelector(`.login-form__password`).value;
    if (this.validate(emailInput, passwordInput)) {
      validationMessage.innerText = ``;
    } else {
      validationMessage.innerText = `The credentials are invalid`;
    }
  }

}
