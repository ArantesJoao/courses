import { Account } from "./Account.js";

export class CheckingAccount extends Account {
  static accountCounter = 0;
  constructor(branch, client) {
    super(0, branch, client);
    CheckingAccount.accountCounter += 1;
  }

  withdraw(value) {
    let tax = 1.1;
    return super._withdraw(value, tax);
  }
}
