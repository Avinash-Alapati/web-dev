// Very Basic Todo App

// list - to show all todos
// add - to add a todo
// delete - to delete a task
// quit - to exit the todo

let todo = [];

let req = prompt("Please Enter Your request");

console.log(req);

while(true){
    if(req == "quit"){
        console.log("Exiting App");
        break;
    }

    if(req == "list"){
        console.log("--------------------------");
        for(let i = 0; i < todo.length; i++){
            console.log(i , todo[i]);
        }
        console.log("---------------------------");
    }
    else if(req == "add"){
        let task = prompt("Please Enter the Task you want to add");
        todo.push(task);
        console.log("Task Added");
    }else if(req == "delete"){
        let idx = prompt("Enter Which Element index You Want to remove");
        todo.splice(idx , 1);
    }
    else{
        console.log("Error 404: Request not Found");
    }

    req = prompt("Please Enter Your request");
}