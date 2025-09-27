const stud1 = {
    name : 'Avinash Alapati',
    age : 18,
    branch : 'CAI',
    getAge : function () {
        return this.age;
    }
};

const stud2 = {
    name : 'Jalluri Venkata Sri Sai',
    age : 20,
    branch : 'CAI',
    getAge : function () {
        return this.age;
    }
};

const stud3 = {
    name : 'Yadagini Mahi Vardhan',
    age : 19,
    branch : 'CSM',
    getAge : function () {
        return this.age;
    }
};

const stud4 = {
    name : 'Bommanaboina Ashok',
    age : 21,
    branch : 'CAI',
    getAge : function () {
        return this.age;
    }
};

// To remove repetitions - if you wanna create 1000 objects like this will you repeat the proces?? - unefficient tarikaa :(
// we use oops to solve this 

// Class - The Actual BluePrint
// student object - name , age , branch - blueprint (Template)

// Object - The Construction we made using that Blueprint

// ---------------------------------------------------------------------------------------------------

let arr = [1,2,3,4];
console.log(arr); // You can see something like Prototype in Console

arr.sayHello = () => {
    console.log("Hello i am Arr!");
};


// Prototype creating a function that can be usefull for every element

// array prototype - we can create a new method of our own like push or pop and that can be applicable to all the arrays

// arr.__proto__ - refrence of actual object

// we can change our push working using arr.__proto__

console.log(arr.__proto__);

// arr.push(26);

arr.__proto__.push = (n) => {
    console.log("Pushing number : " , n);
};

// arr.push(15);

// Array.prototype - Access the actual prototype object

console.log(Array.prototype);
console.log(String.prototype);


// function personMaker (name , age) {
//     const person = {
//         Name : name,
//         Age : age,
//         talk() {
//             console.log(`Hi , I am ${this.Name}`)
//         }
//     };
//     return person
// }

// let p1 = personMaker("Avinash Alapati" , 18);
// let p2 = personMaker("Jalluri Venkata Sri Sai" , 20);
// let p3 = personMaker("Yadagini Mahi Vardhan" , 19);
// let p4 = personMaker("Bommanaboina Ashok" , 21);

// console.log(p3.talk());

// console.log(p1.talk() === p2.talk()); // False - creates new copy each time when we create it

// -------------------------------------------------------------------------------------------

// Constructors
// doesen't return anything & Starts with capital

// New Operator - tricky syntax so we use classes

// function Person(name , age) {
//     this.Name = name;
//     this.Age = age;
// };

// Person.prototype.talk = function () {
//     console.log(`heyy guysss! I am ${this.Name}`);
// };

// let p1 = new Person("Avinash Alapati" , 18);
// let p2 = new Person("Jalluri Venkata Sri Sai" , 20);
// let p3 = new Person("Yadagini Mahi Vardhan" , 19);
// let p4 = new Person("Bommanaboina Ashok" , 21);

// ----------------------------------------------------------------------------------------------

// Class - Classes are a template for creating objects

class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`heyyy guyssssss!! I am ${this.name}`);
    }
}

let p1 = new Person("Avinash Alapati" , 18);
let p2 = new Person("Jalluri Venkata Sri Sai" , 20);
let p3 = new Person("Yadagini Mahi Vardhan" , 19);
let p4 = new Person("Bommanaboina Ashok" , 21);