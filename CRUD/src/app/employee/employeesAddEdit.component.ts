import { Component } from '@angular/core';

import { Router,NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './employeesAddEdit.component.html'
})
export class  addEditEmployeeComponent {
  
    //Object to carry out add/edit operation onto
    addEditObj : any = {}
    //Flag to indicate whether add/edit operation need to be carried
    addFlag : boolean = true;
    //Index of the employee element to be edited
    indexToEdit : number = -1;
    //Employees data in array from localStorage
    employeeList : any = [];
    
    constructor(private router:Router, private route: ActivatedRoute) {
        this.employeeList = JSON.parse(localStorage.getItem("employeesList"))
        router.events.forEach((event) => {
            if(event instanceof NavigationEnd) {                
                if( router.url != "/add"){
                    //Its edit route being rendered
                    this.route.params.subscribe( params =>{
                        this.indexToEdit = params['index'];
                    });
                    this.addFlag = false;
                    this.addEditObj = this.employeeList[this.indexToEdit];
                }
            }
        });
    };
  
    //Function to add/edit employee and update localStorage on the basis of addFlag
    addEditEmployee(){
        if( this.addFlag ){
            this.employeeList.unshift( this.addEditObj );
        }else{
            this.employeeList[this.indexToEdit] = this.addEditObj;
        }
        localStorage.setItem("employeesList", JSON.stringify(this.employeeList));
        //Navigate to emloyees page to show the employees list.
        this.router.navigate(['/employees']);
    }
}