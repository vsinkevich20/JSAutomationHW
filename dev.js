import { Employee } from "./employee.js";

export class Dev extends Employee {
    constructor(id, salary) {
        super(id, salary);
        this.jobType = 'Dev';
    }

    getJobType() {
        return `I am a ${this.jobType}`;
    }
}
const newDev = new Dev(1, 3000);

Object.defineProperty(newDev, 'id', {
    value: newDev.id,
    writable: false, // Робить властивість незмінною
    configurable: false, // Забороняє видалення властивості
});

