import { Client } from "./Client.js";
import { CheckingAccount } from "./CheckingAccount.js";



const client1 = new Client("Richard", 11122233309);

const client2 = new Client("Alice", 88822233309);

const RichardCheckingAccount = new CheckingAccount(1001, client1);
RichardCheckingAccount.deposit(1500);

const AliceCheckingAccount = new CheckingAccount(1002, client2);

RichardCheckingAccount.transfer(600, AliceCheckingAccount);

console.log(AliceCheckingAccount);
console.log(RichardCheckingAccount, CheckingAccount.accountCounter);
