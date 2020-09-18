import { Client } from "./Client.js";

export class CheckingAccount {
  static accountCounter = 0;
  branch;
  _client;
  _balance = 0; // I was not sure if I should use the # convention because it isn't completely approved yet

  // Getters and setters

  set client(newValue) {
    if (newValue instanceof Client) {
      this._client = newValue;
    }
  }

  get client() {
    return this._client;
  }

  get balance() {
    return this._balance;
  }

  // End of getters and setters

  constructor(branch, client) {
    this.branch = branch;
    this._client = client;
    CheckingAccount.accountCounter += 1;
  }

  withdraw(value) {
    if (this._balance >= value) {
      this._balance -= value;
      return value;
    }
  }

  deposit(value) {
    if (value <= 0) return; // early return
    this._balance += value;
  }

  transfer(value, account) {
    const withdrawnValue = this.withdraw(value);
    account.deposit(withdrawnValue);
  }
}
