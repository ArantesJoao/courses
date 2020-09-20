// Abstract class
export class Account {
  constructor(initialBalance, client, branch) {
    if (this.constructor == Account) {
      throw new Error(
        "You shouldn't instantiate an Account type object directly (it is an abstract class)"
      );
    }
    this._balance = initialBalance;
    this._client = client;
    this._branch = branch;
  }

  // Abstract method
  withdraw() {
    throw new Error("The withdraw method is abstract");
  }

  _withdraw(value, tax) {
    const withdrawnValue = tax * value;
    if (this._balance >= withdrawnValue) {
      this._balance -= withdrawnValue;
      return withdrawnValue;
    }

    return 0;
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
