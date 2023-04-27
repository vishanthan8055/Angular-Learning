import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  httpOptions:any;
  constructor(private http:HttpClient) { }

  getReview():Observable<any> {
    return this.http.get("http://localhost:3000/reviews")
  }

  postReview(obj:any):Observable<any>{

    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
  
  return this.http.post("http://localhost:3000/reviews",obj,this.httpOptions);
 }
  
}
