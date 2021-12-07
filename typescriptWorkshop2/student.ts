export class Student {
    name: string;
    code: number;
    documentNumber: number;
    age: number;
    address: string;
    phoneNumber: number;

    constructor(name: string, code: number, documentNumber: number, age: number, address: string, phoneNumber: number) {
        this.name = name;
        this.code = code;
        this.documentNumber = documentNumber;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}

export const alegriaStudent = new Student("Juan Alegría", 202011282, 100000000, 19, "Calle de la Street 18 B17", 3160000000)
