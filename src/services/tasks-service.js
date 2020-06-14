import { Task } from "../models";
import { addDays } from "date-fns";

export default class TasksService {
  index = 3;
  data = [
    new Task(1, "Buy food", new Date(), false),
    new Task(2, "Clean room", new Date(), true),
    new Task(3, "Learn react", addDays(new Date(), 1), true)
  ];

  getTasks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });
  }

  createTask({ name, date }) {
    return new Task(++this.index, name, date, false);
  }
}
