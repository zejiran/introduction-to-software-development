var Student = /** @class */ (function () {
    function Student(name, code, documentNumber, age, address, phoneNumber) {
        this.name = name;
        this.code = code;
        this.documentNumber = documentNumber;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
    return Student;
}());
export { Student };
export var alegriaStudent = new Student("Juan Alegría", 202011282, 100000000, 19, "Calle de la Street 18 B17", 3160000000);
