export class Account {
  constructor(initialBalance, client, branch) {
    this._balance = initialBalance;
    this._client = client;
    this._branch = branch;
  }

  withdraw(value) {
    let tax = 1
    const withdrawnValue = tax * value
    if (this._balance >= withdrawnValue) {
      this._balance -= withdrawnValue;
      return withdrawnValue;
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
