"use strict";
// const userName: string = "Lavanya";
// const exp: number = 5;
// function greetUser(name: string, exp: number) {
//   return `Hello ${name}, ${exp}`;
// }
// enum taskStatus {
//   Todo = "todo",
//   InProgress = "inprogress",
//   Done = "done",
// }
// interface Task {
//   id: number;
//   title: string;
//   description: string;
//   status: taskStatus;
//   createdAt: Date;
// }
// const task1: Task = {
//   id: 1,
//   title: "Learn TS",
//   description: "Cover core concepts of TS",
//   status: taskStatus.InProgress,
//   createdAt: new Date(),
// };
// console.log(task1);
// console.log(`Hello ${userName}, ${exp}`);
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Todo"] = "todo";
    TaskStatus["InProgress"] = "inprogress";
    TaskStatus["Completed"] = "completed";
})(TaskStatus || (TaskStatus = {}));
let tasks = [];
//creating tasks
function createTask(id, title, description) {
    const newTask = {
        id,
        title,
        description,
        status: TaskStatus.Todo,
        createdAt: new Date(),
    };
    tasks.push(newTask);
    return newTask;
}
//any
function identity(value) {
    return value;
}
const result = identity("Hello");
//Generics
function genericsexample(value) {
    return value;
}
const output = genericsexample("hey there");
console.log(output);
