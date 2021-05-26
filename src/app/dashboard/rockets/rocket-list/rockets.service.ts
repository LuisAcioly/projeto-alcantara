import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rocket } from '../rocket';
import { delay, tap } from 'rxjs/operators';
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
}
