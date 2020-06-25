import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class DetailsService{
    private userUrl='https://jsonplaceholder.typicode.com/users';
    private postUrl='https://jsonplaceholder.typicode.com/posts';
    constructor(private http:HttpClient){}
    public getUsers(){
        return this.http.get<any>(this.userUrl);
    }
    public getPosts(){
        return this.http.get<any>(this.postUrl);
    }
}