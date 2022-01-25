// export class TodoItem{
//   desription:string;
//   action:string;
//   constructor(description:string,action:string) {
//     this.desription=description;
//     this.action=action;
//   }
// }

// export class TodoItem{
//   constructor(public description:string,public action:string) {
//     this.description=description;
//     this.action=action;
//   }
// }

export interface TodoItem{
  description:string;
  action:boolean;
}

