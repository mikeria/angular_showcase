import { Component, OnInit } from "@angular/core";
import { Skill } from "../../models/skill";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"]
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  loaded: boolean = false;

  constructor(private dataService: UserService) {}

  ngOnInit() {
    this.dataService.getSkills().subscribe(skills => {
      this.skills = skills;
      this.loaded = true;
    });
  }
}
