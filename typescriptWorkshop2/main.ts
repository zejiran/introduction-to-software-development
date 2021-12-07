import { Course } from './course.js';
import { alegriaStudent, Student } from './student.js';

import { dataCourses } from './dataCourses.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByCredits: HTMLElement = document.getElementById("button-filterByCredits")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement>document.getElementById("search-box")!;
const maxCreditsInput: HTMLInputElement = <HTMLInputElement>document.getElementById("max-credits")!;
const minCreditsInput: HTMLInputElement = <HTMLInputElement>document.getElementById("min-credits")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;

btnfilterByName.onclick = () => applyFilterByName();
btnfilterByCredits.onclick = () => applyFilterByCredits();

renderCoursesInTable(dataCourses);
renderStudentInformation(alegriaStudent);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`

function renderCoursesInTable(courses: Course[]): void {
    console.log('Desplegando cursos');
    courses.forEach((course) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
        coursesTbody.appendChild(trElement);
    });
}

function renderStudentInformation(student: Student): void {
    console.log('Desplegando información de estudiante');
    document.getElementById('name')!.innerHTML = student.name;
    document.getElementById('code')!.innerHTML = `${student.code}`;
    document.getElementById('document-number')!.innerHTML = `${student.documentNumber}`;
    document.getElementById('age')!.innerHTML = `${student.age}`;
    document.getElementById('address')!.innerHTML = student.address;
    document.getElementById('phone-number')!.innerHTML = `${student.phoneNumber}`;
}

function applyFilterByName() {
    let text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}

function applyFilterByCredits() {
    let maxCredits = +(maxCreditsInput.value);
    let minCredits = +(minCreditsInput.value);
    console.log(maxCredits, minCredits)
    clearCoursesInTable();
    let coursesFiltered: Course[] = searchCourseByCredits(maxCredits, minCredits, dataCourses);
    renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
    return nameKey === '' ? dataCourses : courses.filter(c => c.name.match(nameKey));
}

function searchCourseByCredits(max: number, min: number, courses: Course[]) {
    return courses.filter(c => c.credits <= max && c.credits >= min);
}

function getTotalCredits(courses: Course[]): number {
    let totalCredits: number = 0;
    courses.forEach((course) => totalCredits = totalCredits + course.credits);
    return totalCredits;
}

function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
