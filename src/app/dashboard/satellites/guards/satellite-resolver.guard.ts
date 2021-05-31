import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Satellite } from '../Satellite';

@Injectable({
  providedIn: 'root'
})
export class SatelliteResolverGuard implements Resolve<Satellite> {
  private readonly API = `${environment.API}satellites`;

  constructor(private http: HttpClient){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Satellite> {
    if (route.params && route.params.id) {
      return this.http.get<Satellite>(`${this.API}/${route.params.id}`).pipe(take(1));
    }

    return of({
      id: null as any,
      name: null as any,
      type: null as any,
    });
  };  
}
