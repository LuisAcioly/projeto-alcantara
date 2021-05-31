import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Rocket } from '../rocket';
import { RocketFormComponent } from '../rocket-form/rocket-form.component';

@Injectable({
  providedIn: 'root'
})
export class RocketResolverGuard implements Resolve<Rocket> {
  
  private readonly API = `${environment.API}rockets`;

  constructor(private http: HttpClient){};

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Rocket> {
    if (route.params && route.params.id) {
      return this.http.get<Rocket>(`${this.API}/${route.params.id}`).pipe(take(1));
    }

    return of({
      id: null as any,
      name: null as any,
      engine: null as any,
      fuel: null as any,
      company: null as any,
      date: null as any
    });
  }

}
