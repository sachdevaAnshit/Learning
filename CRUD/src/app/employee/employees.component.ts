import { Component } from '@angular/core';

@Component({
  templateUrl: './employees.component.html'
})

export class employeesComponent {
  
    employeeList : any = [];
  
    ngOnInit(){
        this.employeeList = JSON.parse(localStorage.getItem("employeesList"));
    };  //end of ngOnInit
  
    //Function to delete the element from list on the basis of index of the element selected and update localStorage
    deleteEmployee(deleteIndex){
        this.employeeList.splice(deleteIndex, 1);
        localStorage.setItem("employeesList", JSON.stringify(this.employeeList));
    };  //end of deleteEmployee
  
}
