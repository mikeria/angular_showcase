import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";

@Component({
  selector: "modeltest",
  templateUrl: "./modeltest.component.html",
  styleUrls: ["./modeltest.component.css"]
  /* styles: [`
        .special{
            color:green;
            font-size:24;
            text-transform:uppercase
        }
    `] */
})
export class ModelTestComponent {
  data: any[];
  myname: string = "";
  users: string[] = ["john doe", "mary swanson", "Kevin Smith"];
  serviceUsers: User[];
  constructor(public dataService: UserService) {
    //this.serviceUsers = dataService.getUsers();
    //console.log(this.serviceUsers);
    // this.dataService.getData().subscribe(data => {
    //   console.log(data);
    // });
  }
  onSubmit(event) {
    console.log(this.myname);
    this.users.push(this.myname);
  }
}
