export type AllStudentProps = {
    students: Student[];
}

export type Student = {
    id: number;
    nim: number;
    name: string;
    email: string;
    major: string;
    faculty: string;
    university: string;
}

export type StudentPayload = {
    nim: number;
    name: string;
    email: string;
    password: string;
    major: string;
    faculty: string;
    university: string;
}