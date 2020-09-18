export class Client {
  name;
  _ssn;

  // Getters and setters

  get ssn() {
    return this._ssn;
  }

  constructor(name, ssn) {
    this.name = name;
    this._ssn = ssn;
  }
}
