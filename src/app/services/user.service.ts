import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/Observable/of";
import { User } from "../models/user";
import { Skill } from "../models/skill";

@Injectable()
export class UserService {
  data: Observable<Array<number>>;
  users: User[];
  skills: Skill[];
  constructor() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com",
        isActive: true,
        registered: new Date("01/02/2018 08:30:00"),
        hide: true
      },
      {
        firstName: "Kevin",
        lastName: "Johnson",
        email: "kevin@yahoo.com",
        isActive: false,
        registered: new Date("03/11/2017 06:20:00"),
        hide: true
      },
      {
        firstName: "Karen",
        lastName: "Williams",
        email: "karen@gmaial.com",
        isActive: true,
        registered: new Date("11/02/2016 10:30:00"),
        hide: true
      }
    ];
    this.skills = [
      {
        name: "Angular.js",
        about: "Angular.js is a javascript framework built by Google",
        experience: "I have blah blah blah",
        course: [
          "Angularjs,Node and Mongo - Book",
          "Staying sharp with Angular JS - Code School",
          "Beginning AngularJS - Cods School"
        ],
        timeExperience: "4 years",
        links: ["website1", "website2"]
      },
      {
        name: "Angular 2+",
        about:
          "Angular version 2 and above is a javascript framework built by Google and is a seperate framework from version 1",
        experience: "I have blah blah blah",
        course: [
          "Angular Front to Back - Brad Traversy",
          "The Complete Angular Course - Mosh Hamedani"
        ],
        timeExperience: "2 years",
        links: ["website1", "website2"]
      },
      {
        name: "React Js",
        about: "React is a javascript framework built by Facebook",
        experience: "I have blah blah blah",
        course: [
          "React Crash Course - Mosh Hamedani",
          "React Mastery - Mosh Hamedani"
        ],
        timeExperience: "1 year",
        links: ["website1", "website2"]
      },
      {
        name: "Vue Js",
        about:
          "Vue JS is a javascript framework built by former Google engineer",
        experience: "I have blah blah blah",
        course: [
          "Vue Mastery Beginners",
          "Vue Mastery Advanced Components",
          "Vue Mastery Advanced"
        ],
        timeExperience: "1 year",
        links: ["website1", "website2"]
      }
    ];
  }
  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next("hello");
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
    });
    return this.data;
  }
  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  addUser(user: User) {
    this.users.unshift(user);
  }
  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }
}
