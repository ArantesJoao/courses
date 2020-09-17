export class CheckingAccount {
    branch;
    client;

    _balance = 0; // I was not sure if I should use the # convention because it isn't completely approved yet 
  
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
        const withdrawnValue = this.withdraw(value)
        account.deposit(withdrawnValue)
    }
  }