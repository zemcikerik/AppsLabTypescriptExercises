import { Student, Person, Triangle, Employee, JobPosition } from './models';

export function snailDistance(stepHeight: number, stepLength: number, towerHeight: number): number {
    const stepCount = towerHeight / stepHeight;
    return stepCount * stepLength + towerHeight;
}

export function multiplyByLength(array: number[]): number[] {
    return array.map(num => num * array.length);
}

export function equalValues(a: number, b: number, c: number): number {
    if (a === b || a === c) {
        return b === c ? 3 : 2;
    }
    return b === c ? 2 : 0;
}

export function isTriangle(a: number, b: number, c: number): boolean {
    return a + b > c
        && a + c > b
        && b + c > a;
}

export function equalSlices(total: number, people: number, each: number): boolean {
    return people * each <= total;
}

export function checkPalindrome(text: string): boolean {
    const length = text.length;

    for (let i = 0; i < length / 2; i++) {
        const leftChar: string = text.charAt(i);
        const rightChar: string = text.charAt(length - i - 1);

        if (leftChar !== rightChar) {
            return false;
        }
    }
    return true;
}

export function differenceMinMax(numbers: number[]): number {
    if (numbers.length < 2) {
        return 0;
    }

    const min: number = Math.min(...numbers);
    const max: number = Math.max(...numbers);

    return max - min;
}

export function warOfNumbers(numbers: number[]): number {
    if (numbers.length == 0) {
        return 0;
    }

    // maybe add .sum() function to Array prototype
    const evenSum: number = numbers.filter(num => num % 2 === 0).reduce((a, b) => a + b);
    const oddSum: number = numbers.filter(num => num % 2 === 1).reduce((a, b) => a + b);

    return Math.abs(evenSum - oddSum);
}

export function checkEnding(text: string, ending: string): boolean {
    return text.endsWith(ending);
}

export function canCapture(pos: string, pos2: string): boolean {
    return pos.charAt(0) === pos2.charAt(0)
        || pos.charAt(1) === pos2.charAt(1);
}

export function getStudentIdentification(student: Student): string {
    return `${student.name}: ${student.studentNumber}`;
}

export function getFormattedStudentInfo(student: Student): string {
    return `${student.studentNumber}, ${student.phoneNumber}, ${student.address}`;
}

export function getPeopleBudget(people: Person[]): number {
    return people.map(person => person.budget).reduce((a, b) => a + b);
}

export function getTrianglePerimeter(triangle: Triangle): number {
    return triangle.a + triangle.b + triangle.c;
}

export function getTriangleArea(triangle: Triangle): number {
    // semiperimeter of the triangle
    const s: number = getTrianglePerimeter(triangle) / 2;

    // https://en.wikipedia.org/wiki/Heron%27s_formula
    return Math.sqrt(s * (s - triangle.a) * (s - triangle.b) * (s - triangle.c));
}

export function getFormattedEmployeeInfo(employee: Employee): string {
    const position: JobPosition = employee.jobPosition;
    return `${employee.name}, ${position.name}, salary: ${position.salary} eur`;
}