import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUname:string=""
  loginPswd:string=""

  constructor(private api:ApiServiceService, private router:Router){}


  login(){
    if(!this.loginUname || !this.loginPswd){
      Swal.fire({
        title: 'Oops',
        text: 'Please fill the form completely',
        icon: "info"
      })

    


    }
    else{
      this.api.loginApi().subscribe({
        next:(res:any)=>{
          console.log(res);

          const {username, password} = res
          if(username==this.loginUname && password==this.loginPswd){
            Swal.fire({
              title: 'wow',
              text: 'Login Successfull',
              icon: "success"
            })

            this.router.navigateByUrl('/home')
          }
          else{
            Swal.fire({
              title: 'Oops',
              text: 'Invalid Email Id or Password',
              icon: "error"
            })
          }


        },error:(err:any)=>{
          console.log(err);
          
        }
      })
    }
  }

}
