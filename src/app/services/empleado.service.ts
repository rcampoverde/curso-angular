import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IEmpleado} from "../interfaces/empleado.interface";
import {Observable} from "rxjs";

const API_GET_ALL_EMPLOYEE = environment.API_GET_ALL_EMPLOYEE;

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private readonly httpClient: HttpClient = inject(HttpClient)

  getAllEmployees(): Observable<IEmpleado> {
    return this.httpClient.get<IEmpleado>(API_GET_ALL_EMPLOYEE);
  }
}
