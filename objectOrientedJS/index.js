import { Client } from "./Client.js";
import { Manager } from "./Employees/Manager.js";
import { Director } from "./Employees/Director.js";
import { AuthenticationSystem } from "./AuthenticationSystem.js";

const director = new Director("Phillip", 10000, 1234567890);
director.registerPassword("1223");
const manager = new Manager("Richard", 5000, 1234567891);
manager.registerPassword("12223");
const client = new Client("Henry", 7890123456, "456");

const isDirectorLogged = AuthenticationSystem.login(director, "1223");
const isManagerLogged = AuthenticationSystem.login(manager, "12223");
const isClientLogged = AuthenticationSystem.login(client, "12223");

console.log(isDirectorLogged, isManagerLogged, isClientLogged);
