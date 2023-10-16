import { Dev } from "./modules /dev.js";

const newDev = new Dev(1, 3000);
Object.defineProperty(newDev, 'id', {
    value: newDev.id,
    writable: false,
    configurable: false,
});
newDev.id = 15;
