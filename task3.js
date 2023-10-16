import { Employee } from "./modules /employee.js";
import { Dev } from "./modules /dev.js";

const user1 = new Dev(1, 2000);
const user2 = new Dev(2, 1500);
const user3 = new Dev(3, 1000);
const user4 = new Dev(4, 2000);
const user5 = new Dev(6, 2500);
const user6 = new Dev(5, 2500);
const user7 = new Dev(7, 3500);
const user8 = new Dev(8, 1000);
const users = Employee.returnArrayOfDevs(
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8
);

console.log(sortBySalary(users));

