export interface Student {
    name: string;
    studentNumber: number;
    phoneNumber: string;
    address: string;
}

export interface Person {
    name: string;
    age: number;
    budget: number;
}

export interface Triangle {
    a: number;
    b: number;
    c: number;
}

export interface JobPosition {
    name: string;
    salary: number;
}

export interface Employee {
    name: string;
    surname: string;
    dateOfBirth: Date;
    jobPosition: JobPosition;
}