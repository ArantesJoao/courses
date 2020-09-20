export class Employee {
  constructor(name, salary, ssn) {
    this._name = name;
    this._salary = salary;
    this._ssn = ssn;

    this._bonus = 1;
    this._password;
  }

  // Setters and getters

  get password() {
    return this._password;
  }

  registerPassword(password) {
    this._password = password;
  }

  authenticate(password) {
      return password == this._password
  }
}
