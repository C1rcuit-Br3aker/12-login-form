
export default class Login {

  constructor(email, password ) {
    this.validCreds = [
      { email: `aaron@theironyard.com`, password: `password123` },
      { email: `admin@google.com`, password: `pandas` },
      { email: `email@email.com`, password: `honeycrisp` },
    ]};


  validate(userName, passWord) {
    this.userName = userName;
    this.passWord = passWord;

    if (userName === ``) {
      return false;
    }
    return true;
  }

}
