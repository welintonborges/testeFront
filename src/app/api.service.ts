import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pessoa} from "./Pessoa";
import {take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private  readonly  API = 'http://localhost:8080/pessoas';
  constructor(private http: HttpClient) { }

    list(){
      return this.http.get<Pessoa[]>(this.API);
  }
  create(pessoa: any){
    console.log("pessoa --->", pessoa)
    return this.http.post(this.API, pessoa).pipe(take(1))
  }
}
