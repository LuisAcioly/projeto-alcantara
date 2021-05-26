import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rocket } from '../rocket';
import { RocketsService } from './rockets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.scss']
})
export class RocketListComponent implements OnInit {

  //rocketList: Rocket[] = [];

  rocketList$!: Observable<Rocket[]>;

  constructor(private service: RocketsService, private router: Router) { }

  ngOnInit(): void {
    //this.service.list().subscribe(data => this.rocketList = data);
    
    this.rocketList$ = this.service.list();
  }
}