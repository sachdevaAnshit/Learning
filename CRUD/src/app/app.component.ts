import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    constructor() {
        //Static array holding data of employees
        let dummyList = [
            {
                "firstName" : "Anshit","lastName" : "Sachdeva","age" : 25,"company" : "ABC"
            },
            {
                "firstName" : "Arun","lastName" : "Arora","age" : 24,"company" : "DEF"
            },
            {
                "firstName" : "Naresh","lastName" : "Kumar","age" : 28,"company" : "GHI"
            }
        ];
        //Storing the static list in localStorage
        localStorage.setItem("employeesList", JSON.stringify(dummyList));
    };  //end of comstructor
    
};  //end of AppComponent