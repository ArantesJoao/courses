import { Account } from "./Account.js";

export class SavingsAccount extends Account {
  constructor(initialBalance, client, branch) {
    super(initialBalance, client, branch);
  }

  withdraw(value) {
    const tax = 1.02;
    return super._withdraw(value, tax);
  }
}
