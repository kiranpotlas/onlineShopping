import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {
  private materialUrl='https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }
  public getMaterials():Observable<any>{
    return this.http.get<any>(this.materialUrl);
  }
}
