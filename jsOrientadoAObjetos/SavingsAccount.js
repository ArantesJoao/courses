export class SavingsAccount {
  constructor(initialBalance, client, branch) {
    this._balance = initialBalance;
    this._client = client;
    this._branch = branch;
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
