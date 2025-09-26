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







