"use strict";
//
// FULLNAME: TAOFEEK KASSIM
// EMAIL: taophyckassim@gmail.com
// GITHUB USERNAME: Taophycc
// Library management system
// Task manager
class Task {
    // constructor function
    constructor(id, description, completed) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }
    // Checks if task is completed
    complete() {
        this.completed = true;
    }
    // Checks if task is pending
    pending() {
        this.completed = false;
    }
    //Checks the status of the tasks
    status() {
        return `Task is ${this.completed ? "Completed" : "Pending"}`;
    }
}
// Task manager class
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    // Pushes task to the tasks array
    addTask(task) {
        this.tasks.push(task);
    }
    // Lists out task in the tasks array
    listTasks() {
        return this.tasks;
    }
}
// Test Cases
const t = new TaskManager();
t.addTask(new Task(1, "write some code", false));
t.addTask(new Task(2, "do some chore", true));
t.addTask(new Task(3, "Go to the gym", true));
// Listing the tasks
t.listTasks().forEach((task) => {
    console.log(`${task.id}: ${task.description} - ${task.status()}`);
});
