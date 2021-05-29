import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rocket } from './rocket';
import { delay, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  private readonly API = `${environment.API}rockets`;

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Rocket[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  create(rocket: any){
    return this.http.post(this.API, rocket).pipe(take(1));
  }

  remove(id: any){
    console.log(id);
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

  update(rocket: any){
    console.log(rocket.id)
    return this.http.put(`${this.API}/${rocket.id}`, rocket).pipe(take(1));
  }
}
