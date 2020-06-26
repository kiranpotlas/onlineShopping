import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl ='https://localhost:4200/';
  private registerUrl= this.baseUrl+'register';
  private signinUrl= this.baseUrl+'signin';
  constructor(private http:HttpClient) { }
  public registerUser(user):Observable<any>{
    return this.http.post<any>(this.registerUrl,user);
  }
   public signinUser(user):Observable<any>{
    return this.http.post<any>(this.signinUrl,user);
  }
}
