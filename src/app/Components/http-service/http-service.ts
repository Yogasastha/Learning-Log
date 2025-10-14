import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { OnInit } from '@angular/core';
import { Api } from './api';
import {Employee} from './Employee.Interface';
@Component({
  selector: 'app-http-service',
  standalone: false,
  templateUrl: './http-service.html',
  styleUrl: './http-service.css'
})
export class HttpService implements OnInit{
  constructor(private service: Api, ) {}
  employees: any[] = [];
  addValue: any[] = [];
  msg: string ="";
  employee: Employee = {
    id: "1",
    name: "Saran",
    email:"saran@gmail.com",
    phone: 9874654676
  }
  

  // Custom methods use service and subscribe
//   anys() {
//     this.service.getData().subscribe(
//       (response: any) =>
//       {
//         console.log(response[0]);
//         this.employees = response[0];
//       }
//   );
// }





ngOnInit() {
  this.service.getData().subscribe(
    (response: any) =>
      {
        this.employees = response;
      }
    );
   (this.service.addData(this.employee).subscribe((res)=> {
    this.employee = res;
    }))
    
    this.service.addData(this.employee);
    
    // this.service.addData(this.employee).subscribe((res: any) => {
    // this.addValue = res;
    // this.msg = "Success Employee added";
    // });
  
  }


      // private apiUrl = 'http://localhost:3000/employees';
  // baseUrl: string = 'http://localhost:3000/'

  // constructor(private service: HttpClient ){}
  

  // getData(): any {
  //   const url = `${this.baseUrl}employees`; 
  //   return this.service.get(url).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
