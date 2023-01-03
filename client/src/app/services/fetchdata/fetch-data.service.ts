import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {


  urlbase: string = `http://localhost:3002`
  constructor(private http: HttpClient) { }

  /////////// Fetch sectores data
  getAllSectores(): Observable<any> {
    return this.http.get<any>(
      `${environment.urlbase}/sectores`
    );
  }

  getSector(id: string): Observable<any> {
    return this.http.get<any>(
      `${environment.urlbase}/sectores/${id}`
    );
  }

  
  /////////// Fetch puestos data
  getAllPuestos(): Observable<any> {
    return this.http.get<any>(
      `${environment.urlbase}/puestos`
    );
  }

  getPuesto(id: string): Observable<any> {
    return this.http.get<any>(
      `${environment.urlbase}/puestos/${id}`
    );
  }

  /////////// Fetch elements data

  getComputer(id: string): Observable<any> {
    return this.http.get<any>(
      `${environment.urlbase}/computers/${id}`
      );
  }

  getPhone(id: string): Observable<any> {
    return this.http.get<any>(
      `${environment.urlbase}/phones/${id}`
      );
  }

  getOther(id: string): Observable<any> {
    return this.http.get<any>(
      `${environment.urlbase}/others/${id}`
      );
  }


  ////////// Fetch all items
  getAll(): Observable<any>{
    return this.http.get<any>(`${environment.urlbase}/sectores/getall`)
  }
}
