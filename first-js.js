let students = [
    {   id: "1345",
        name: "Hans Meiser"
    },
    {
        id: "8472",
        name: "Karla Kolumna"
    },
    {
        id: "4639",
        name: "Benjamin Blümchen"
    },
    {
        id: "8459",
        name: "Kurt Cobain"
    }
];

const elementById = document.getElementById("root");
const createdDiv = document.createElement("div");
elementById.appendChild(createdDiv);


for (const student of students){
    const renderedStudentNameEntries = createStudentNameEntry(student);
    createdDiv.appendChild(renderedStudentNameEntries);
}


function createStudentNameEntry (student){
    const container = document.createElement("div");
    container.setAttribute("class", "student-name-container");
    const studentName = document.createTextNode(student.name);
    container.appendChild(studentName);
    return container;
}

const createdRightColumnDiv = document.createElement("div");
elementById.appendChild(createdRightColumnDiv);


for (const student of students){
    const renderedStudentIdEntries = createStudentIdEntry(student);
    createdRightColumnDiv.appendChild(renderedStudentIdEntries);
}


function createStudentIdEntry (student){
    const container = document.createElement("div");
    container.setAttribute("class", "student-id-container");
    const studentId = document.createTextNode(student.id);
    container.appendChild(studentId);
    return container;
}

const getStudentElementsByNames = document.getElementsByClassName("student-name-container");
const student = getStudentElementsByNames[0];

/*
student.onmouseover = mouseOverFunction;

function mouseOverFunction(){
    student.setAttribute("style", "color: red")
}
*/








/*
const firstVariable = 3;

const secondVariable = 4;
console.log('firstVariable + secondVariable is concatenate = '+firstVariable+secondVariable);



function add(number1, number2){
    return number1 + number2
};
console.log('function to add number1 + number2 = '+add(4,7));

console.log("let student = {name: Dennis, age 21")
let  student = {
    name: "Dennis",
    age: 21
};
console.log(student);
student.name = "Hans";
console.log(student);


let students = [{name: "Dennis", age: 32}, {name: "Herbert", age: 98}, {name: "Hugo", age: 87}];
console.log(students[1]);

students[1].age = 17;
console.log(students[1]);

students.push({name: "Gabi", age: 54});
console.log(students);
*/