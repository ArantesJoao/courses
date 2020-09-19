import { Account } from "./Account.js";

export class CheckingAccount extends Account {
  static accountCounter = 0;
  constructor(branch, client) {
    super(0, branch, client);
    CheckingAccount.accountCounter += 1;
  }
}
