import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {url} from "./environment";

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(public http: HttpClient) {

  }

  addProyecto(proyecto){
    return this.http.post(url+'/proyecto', proyecto);
  }

  getAllProyecto(){
    return this.http.get<[any]>(url+'/proyecto/getAll');
  }
}
