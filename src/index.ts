const userName: string = "Lavanya";
const exp: number = 5;
function greetUser(name: string, exp: number) {
  return `Hello ${name}, ${exp}`;
}
enum taskStatus {
  Todo = "todo",
  InProgress = "inprogress",
  Done = "done",
}
interface Task {
  id: number;
  title: string;
  description: string;
  status: taskStatus;
  createdAt: Date;
}
const task1: Task = {
  id: 1,
  title: "Learn TS",
  description: "Cover core concepts of TS",
  status: taskStatus.InProgress,
  createdAt: new Date(),
};
console.log(task1);
console.log(`Hello ${userName}, ${exp}`);
