"use strict"

// Uebung 04

let students = [
    "Max",
    "Monika",
    "Franziska",
    "Bernd",
    "Tobias",
    "Andreas"
    ]

   const students1 = [];
   const students2 = []; 

   for(let studentSplit in students ){
       if(studentSplit % 2 == 0){
           students1.push(students[studentSplit]); 
       } else {
           students2.push(students2[studentSplit]); 
       }
   }

   console.log(students1); 
   console.log(students2); 

// Uebung 05
let levels = ["A1","A2","B1","B2","C1","C2"]
let prices = [400,500,550,600,650,700]
let costsForCouese = 0; 
let searchForLevel = 'C1';
let lowLevel = 'A2'; 
let highLevel = 'C1'; 
let start = levels.indexOf(lowLevel)
let end = levels.indexOf(highLevel)
let highestLevel; 
let maxPrice = 1500; 


for(let levelsSplit in levels){
    if(levels [levelsSplit] === searchForLevel) {
        costsForCouese = prices[levelsSplit]; 
    }
}

console.log(searchForLevel + ' ' + 'beträgt' +  ' ' + costsForCouese + '€')


for (let levelSplit = levels.indexOf(lowLevel); levelSplit <= levels.indexOf(highLevel); levelSplit++) {
    costsForCouese = costsForCouese + prices[levelSplit];
}
console.log('Die Kurslevels '  + lowLevel  + ' bis '  + highLevel + ' ' + 'betragen '  + costsForCouese + '€'); 

for (let lSplit in levels) {
    if(costsForCouese + prices[lSplit] <= maxPrice){
        costsForCouese += prices[lSplit]; 
        highestLevel = levels[lSplit];
    } else {
        break; 
    }
}
console.log('Ein Teilnehmer kann mit ' + maxPrice + '€' +  ' das Level ' + highestLevel + ' erreichen'); 

// Uebung 06

let studentsPerCourse = [
    ["Max", "Monika"], // Erster Kurs
    ["Erik", "Erika"] // Zweiter Kurs
]

let studentCount = 0;
let deleteStudent = 'Erika';
let studentIsIncluded = false;  

for (let course of studentsPerCourse) {
    for (const student of course) {
        studentCount++;
    }
}
console.log('Die Anzahl der Kursteilnehmer beträgt ' + studentCount);

for (let course of studentsPerCourse) {
    for (const student of course){
        if (student.includes(deleteStudent)){
            studentIsIncluded = true; 
            let i = course.indexOf(deleteStudent); 
            course.splice(i,1)
        }
    } 
    if (!studentIsIncluded){
        console.log('Der Kursteilnehmer ' + deleteStudent + ' konnte nicht gefunden werden');
        console.log(studentsPerCourse);
    }else {
        console.log('Der Kursteilnehmer ' + deleteStudent + ' wurde entfernt');
    }

// Uebung 07
const courses = [
    ["Christian", "Annika"], // Kurs 1 mit 2 Teilnehmern
    ["Julian", "Lisa", "Tobias"] // Kurs 2 mit 3 Teilnehmern
]

function getSmallestCourse() {
    let smallestCourseIndex = 0;

    for (let courseIndex in courses) {
        if (courses[courseIndex].length < courses[smallestCourseIndex].length) {
            smallestCourseIndex = courseIndex;
        }
    }

    return smallestCourseIndex;
}

console.log(getSmallestCourse());

function addStudent(name) {
    const smallestCourse = getSmallestCourse(); 
    courses[smallestCourse].push(name);
}
console.log(courses); 

// Uebung 08 
const LANGUAGE_DE = ["hallo","heute","sprachkurs","willkommen","mikrofon","und"];
const LANGUAGE_EN = ["hello","today","language course","welcome","microphone","and"];

function translateWord(word) {
    return LANGUAGE_EN[LANGUAGE_DE.indexOf(word.toLowerCase())] ?? word;
}
console.log(translateWord('Sprachkurs'));


function ucFirst(word) {
    let sliceword = word.charAt(0).toUpperCase() + word.slice(1,13)
    return sliceword
}
console.log(ucFirst("sprachschule")); 

function translateSentence(sentence) {
    let words = sentence.split(' ');

    for (let wordIndex in words){
        words[wordIndex] = translateWord(words[wordIndex]);
    }

    words[0] = ucFirst(words[0]);

    return words.join(' ');
}
console.log(translateSentence("Hallo und willkommen beim Sprachkurs"));
}