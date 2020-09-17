import { Client } from "./Client.js"
import { CheckingAccount } from "./CheckingAccount.js"


const client1 = new Client();
client1.name = "Richard";
client1.ssn = 11122233309;

const client2 = new Client();
client2.name = "Alice";
client2.ssn = 88822233309;

const RichardCheckingAccount = new CheckingAccount();
RichardCheckingAccount.branch = 1001;
RichardCheckingAccount.client = client1
RichardCheckingAccount.deposit(500);
console.log(RichardCheckingAccount);

const AliceCheckingAccount = new CheckingAccount();
AliceCheckingAccount.branch = 1002
AliceCheckingAccount.client = client2

RichardCheckingAccount.transfer(600, AliceCheckingAccount)

console.log(AliceCheckingAccount, RichardCheckingAccount);
