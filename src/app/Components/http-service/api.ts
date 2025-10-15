import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee.Interface';

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
    return this.service.post(this.url, employee);
  }
  patchUserById(id: string, updateData: Partial<Employee>) {
    const patchUrl = `${this.url}/${id}`;

    return this.service.patch(patchUrl, updateData);
  }
  deleteUserById(id: string) {
    const deleteUrl = `${this.url}/${id}`
    return this.service.delete(deleteUrl);
  }
}
