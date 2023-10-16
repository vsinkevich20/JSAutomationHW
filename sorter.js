export function sortBySalary(employees) {
    return employees.sort((a, b) => b.salary - a.salary);
};
export default function sortBySalary(objects) {
    return objects.sort((a, b) => {
        if (a.salary !== b.salary) {
            return a.salary - b.salary; // Sort by ascending salary
        } else {
            return a.id - b.id; // Sort by ascending ID when salaries are equal
        }
    });
}




