
export default class LoginForm {

  constructor(form, email) {
    this.validCreds = [
      { eMail: `aaron@theironyard.com`, passWord: `password123` },
      { eMail: `admin@google.com`, passWord: `pandas` },
      { eMail: email, passWord: `honeycrisp` },
    ];
  }

  validate(username, password) {
    return this.validCreds.reduce((good, currentUser) => {
      if (currentUser.eMail === username && currentUser.passWord === password) {
        return true;
      }
      return good;
    }, false);
  }
}
