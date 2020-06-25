import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl ='http://localhost:4080/api/';
  private registerUrl= this.baseUrl+'register';
  private signinUrl= this.baseUrl+'signin';
  constructor(private http:HttpClient) { }
  public registerUsers(user):Observable<any>{
    return this.http.post<any>(this.registerUrl,user);
  }
  public signinUsers(user):Observable<any>{
    return this.http.post<any>(this.signinUrl,user);
  }
}
