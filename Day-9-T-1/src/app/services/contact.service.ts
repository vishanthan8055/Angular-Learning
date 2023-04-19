import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
//constructor injection
  constructor(private http:HttpClient) { }

  getContacts():Observable<any> {
    return this.http.get("http://localhost:3000/contacts")
  }
}
