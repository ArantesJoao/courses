export class Client {
  constructor(name, ssn, password) {
    this.name = name;
    this._ssn = ssn;
    this._password = password;
  }

  // Getters and setters

  get ssn() {
    return this._ssn;
  }

  // End of getters and setters
}
