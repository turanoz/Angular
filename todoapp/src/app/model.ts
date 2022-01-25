import {TodoItem} from "./todoItem";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = "Turan";
    this.items = [
      /*{description: "kahvaltı", action: true},
      {description: "spor", action: false},
      {description: "alışveriş", action: false},W
      {description: "ders", action: true}*/
    ];
  }
}
