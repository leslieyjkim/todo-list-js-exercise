function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(
        `${task.title} has${task.complete ? " " : " not "}been completed`
      );
    },

    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
}

//#1.
// function logTaskState(task) {
//   console.log(
//     `${task.title} has${task.complete ? " " : " not "}been completed`
//   );
// }
// modify the above functions into Method, and gonna put it into the object above

// #2.
// function completeTask(task) {
//   task.complete = true;
// }
// modify the above functions into Method, and gonna put it into the object above

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed
// already modified the function into Method above, so we modified driver code also.

task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);
