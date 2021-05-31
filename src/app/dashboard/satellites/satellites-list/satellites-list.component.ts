import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Satellite } from '../Satellite';
import { SatellitesService } from '../satellites-service';

@Component({
  selector: 'app-satellites-list',
  templateUrl: './satellites-list.component.html',
  styleUrls: ['./satellites-list.component.scss']
})
export class SatellitesListComponent implements OnInit {

  satelliteList$!: Observable<Satellite[]>

  constructor(private service: SatellitesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.satelliteList$ = this.service.list();
  }

  onEdit(id: any){
    var satellite = new Satellite();
    console.log(satellite);

    this.router.navigate(['editar', id], { relativeTo: this.route});
  }

  onDelete(satellite: any){
    this.service.remove(satellite.id).subscribe(
      success => {
        this.onRefresh();
      });
  }

  onRefresh(){
    this.satelliteList$ = this.service.list();
  }

}
