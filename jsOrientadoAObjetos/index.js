class Client {
  name;
  ssn;
}

class CheckingAccount {
  branch;
  balance;

  withdraw(value) {
    if (this.balance >= value) {
      this.balance -= value;
    }
  }

  deposit(value) {
    if (value > 0) {
      this.balance += value;
    }
  }
}

const client1 = new Client();
client1.name = "Richard";
client1.ssn = 11122233309;

const client2 = new Client();
client2.name = "Alice";
client2.ssn = 88822233309;

const RichardCheckingAccount = new CheckingAccount();
RichardCheckingAccount.balance = 0;
RichardCheckingAccount.branch = 1001;

RichardCheckingAccount.deposit(200);
RichardCheckingAccount.withdraw(150);

console.log(RichardCheckingAccount);

// parei as 4:45
