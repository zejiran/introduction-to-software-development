import { alegriaStudent } from './student.js';
import { dataCourses } from './dataCourses.js';
var coursesTbody = document.getElementById('courses');
var btnfilterByName = document.getElementById("button-filterByName");
var btnfilterByCredits = document.getElementById("button-filterByCredits");
var inputSearchBox = document.getElementById("search-box");
var maxCreditsInput = document.getElementById("max-credits");
var minCreditsInput = document.getElementById("min-credits");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCredits.onclick = function () { return applyFilterByCredits(); };
renderCoursesInTable(dataCourses);
renderStudentInformation(alegriaStudent);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudentInformation(student) {
    console.log('Desplegando información de estudiante');
    document.getElementById('name').innerHTML = student.name;
    document.getElementById('code').innerHTML = "" + student.code;
    document.getElementById('document-number').innerHTML = "" + student.documentNumber;
    document.getElementById('age').innerHTML = "" + student.age;
    document.getElementById('address').innerHTML = student.address;
    document.getElementById('phone-number').innerHTML = "" + student.phoneNumber;
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function applyFilterByCredits() {
    var maxCredits = +(maxCreditsInput.value);
    var minCredits = +(minCreditsInput.value);
    console.log(maxCredits, minCredits);
    clearCoursesInTable();
    var coursesFiltered = searchCourseByCredits(maxCredits, minCredits, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) { return c.name.match(nameKey); });
}
function searchCourseByCredits(max, min, courses) {
    return courses.filter(function (c) { return c.credits <= max && c.credits >= min; });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
