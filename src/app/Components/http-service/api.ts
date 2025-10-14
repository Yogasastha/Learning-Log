import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api {
  
    // private apiUrl = 'http://localhost:3000/employees';
    baseUrl: string = 'http://localhost:3000/'

    url = `${this.baseUrl}employees`; 
  constructor(private service: HttpClient ){}

  
  getData(): Observable<any>  {
    return this.service.get(this.url);
  }
  
  addData(employee: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    // var data = JSON.stringify(this.data)
    // console.log(JSON.stringify(this.data));
    // console.log(this.service.post(this.url, JSON.stringify(this.data), {headers}));
    
    // this.service.post(this.url, employee, {headers}).subscribe((res)=> {
    //   return console.log(res);
    // // });
    //   console.log((this.service.post(this.url, employee)));
    return this.service.post(this.url, employee);
  }
}
