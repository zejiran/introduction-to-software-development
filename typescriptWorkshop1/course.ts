export class Course {
    name: string;
    credits: number;
    professor: string;

    constructor(name: string, professor: string, credits: number) {
        this.name = name;
        this.credits = credits;
        this.professor = professor;
    }
}
