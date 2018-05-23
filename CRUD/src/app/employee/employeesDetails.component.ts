import { Component } from '@angular/core';

import { Router,NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './employeesDetails.component.html'
})
export class employeeDetailsComponent {
    
    employeeDetailsObj : any = {};
    
    constructor(private router:Router, private route: ActivatedRoute) {
        let employeeList = JSON.parse(localStorage.getItem("employeesList"));
        let indexToShow;
        router.events.forEach((event) => {
            if(event instanceof NavigationEnd) {                
                if( router.url != "/add"){
                    this.route.params.subscribe( params =>{
                        indexToShow = params['index'];
                    });
                    this.employeeDetailsObj = employeeList[indexToShow];
                }
            }
        });
    }
};