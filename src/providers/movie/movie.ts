import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class ServiceProvider {

  constructor(private http:HttpClient) { }


   getFilmInfo(title:string):Observable<any>{

    return this.http.get("http://www.omdbapi.com/?apikey=121c2657&s="+title);
   }



  }
