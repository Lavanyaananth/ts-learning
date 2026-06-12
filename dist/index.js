"use strict";
const userName = "Lavanya";
const exp = 5;
function greetUser(name, exp) {
    return `Hello ${name}, ${exp}`;
}
var taskStatus;
(function (taskStatus) {
    taskStatus["Todo"] = "todo";
    taskStatus["InProgress"] = "inprogress";
    taskStatus["Done"] = "done";
})(taskStatus || (taskStatus = {}));
const task1 = {
    id: 1,
    title: "Learn TS",
    description: "Cover core concepts of TS",
    status: taskStatus.InProgress,
    createdAt: new Date(),
};
console.log(task1);
console.log(`Hello ${userName}, ${exp}`);
