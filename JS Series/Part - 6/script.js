// "This" Keyword

// "This" keyword refers to an object that is executing the current piece of code 

const Student = {
    user : "Avinash" , 
    Age : 18,
    DL : 5,
    CN : 10,
    OS : 8,
    getAvg() {
        let average = (this.DL + this.CN + this.OS) / 3;
        console.log(`${this.user} got an Average = ${average}`);
    }
}
