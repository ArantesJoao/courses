export class Client {
  constructor(name, ssn) {
    this.name = name;
    this._ssn = ssn;
  }

  // Getters and setters

  get ssn() {
    return this._ssn;
  }
}
