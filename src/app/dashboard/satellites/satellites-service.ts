import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Satellite } from './Satellite';

@Injectable({
  providedIn: 'root'
})
export class SatellitesService{

  private readonly API = `${environment.API}satellites`;

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Satellite[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  create(satellite: any){
    return this.http.post(this.API, satellite).pipe(take(1));
  }

  remove(id: any){
    console.log(id);
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

  update(satellite: any){
    console.log(satellite.id)
    return this.http.put(`${this.API}/${satellite.id}`, satellite).pipe(take(1));
  }
}
