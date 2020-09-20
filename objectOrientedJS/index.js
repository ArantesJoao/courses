import { Client } from "./Client.js";
import { CheckingAccount } from "./CheckingAccount.js";
import { SavingsAccount } from "./SavingsAccount.js";
import { SalaryAccount } from "./salaryAccount.js";

const client1 = new Client("Richard", 11122233309);

const richardCheckingAccount = new CheckingAccount(0, client1, 1001);
richardCheckingAccount.deposit(1500);
richardCheckingAccount.withdraw(500);

const savingsAccount = new SavingsAccount(50, client1, 1001);
const salaryAccount = new SalaryAccount(client1)
salaryAccount.deposit(10000)
salaryAccount.withdraw(1000)

console.log(salaryAccount)
console.log(richardCheckingAccount)
