import { Component, OnInit } from '@angular/core';
import { EmployeeModal } from '../employee.nodel';
import { ApiServiceService } from '../services/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employee: EmployeeModal = {}

  cancelEmployee() {
    this.employee = {}
  }


  allEmployee: EmployeeModal[] = []
 

  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    this.getAllEmployeeApi()
  }


  reloadPage(){
    window.location.reload();
  }

  getAllEmployeeApi() {
    this.api.getAllEmployeeApi().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allEmployee = res

      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }

  submitEmployee() {
    
      console.log(this.employee);
    this.api.addEmployeeApi(this.employee).subscribe({
      next: (res: EmployeeModal) => {
        console.log(res);
        Swal.fire({
          title: 'wow',
          text: 'Employee added successfully',
          icon: "success"
        })

      },
      error: (err: any) => {
        console.log(err);


      }
    })
    }
   



  

}
