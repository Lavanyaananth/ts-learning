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
enum TaskStatus {
  Todo = "todo",
  InProgress = "inprogress",
  Completed = "completed",
}
interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
}
let tasks: Task[] = [];
//creating tasks
function createTask(id: number, title: string, description: string): Task {
  const newTask: Task = {
    id,
    title,
    description,
    status: TaskStatus.Todo,
    createdAt: new Date(),
  };
  tasks.push(newTask);

  return newTask;
}
console.log(createTask(1, "Learn TypeScript", "Study interfaces and enums"));
