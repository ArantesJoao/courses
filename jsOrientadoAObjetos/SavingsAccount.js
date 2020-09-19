import { Account } from "./Account.js";

export class SavingsAccount extends Account {
  constructor(initialBalance, client, branch) {
      super(initialBalance, client, branch)
  }
}
