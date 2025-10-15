import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Api } from './api';
import { Employee } from './Employee.Interface';
@Component({
  selector: 'app-http-service',
  standalone: false,
  templateUrl: './http-service.html',
  styleUrl: './http-service.css',
})
export class HttpService implements OnInit {
  constructor(private service: Api) {}
  employees: any[] = [];
  msg: string = '';
  id:string='';
  data: Employee = {
    id: '1',
    name: 'Saran',
    email: 'saran@gmail.com',
    phone: 9874654676,
  };

  getData() {
    this.service.getData().subscribe((response: any) => {
      // console.log((this.employees = response));
      this.employees = response;
    });
  }

  patchData() {
    console.log(this.id)
    this.service
      .patchUserById('E712347', { email: 'selva2001@gmail.com' })
      .subscribe((res: any) => {
        this.getData();
      });
  }
  postData() {
    this.service.addData(this.data).subscribe((response) => {
      this.getData();
    });
    // this.service.addData(this.data);
  }
  deleteData() {
     this.service.deleteUserById("1").subscribe((res) => {
      console.log(res);
      this.getData();

      
     },
    // .error(error) {
        
    //   }
    );
  }
  ngOnInit() {
    this.getData();
    this.patchData();
  }
}
