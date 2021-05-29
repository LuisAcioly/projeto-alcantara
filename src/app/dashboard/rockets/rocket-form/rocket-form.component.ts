import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Rocket } from '../rocket';
import { RocketsService } from '../rockets.service';

@Component({
  selector: 'app-rocket-form',
  templateUrl: './rocket-form.component.html',
  styleUrls: ['./rocket-form.component.scss']
})
export class RocketFormComponent implements OnInit {

  form!: FormGroup;
  fuels = ['Hidrogênio', 'Oxigênio'];
  engines = ['Raptor', 'Scramjet'];
  companies = ['SpaceX', 'Blue Origin'];

  private readonly API = `${environment.API}rockets`;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private service: RocketsService) { }

  ngOnInit(): void {

    const rocket = this.route.snapshot.data['rocket'];

    this.form = this.fb.group({
      id: [rocket.id],
      name: [rocket.name, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      engine: [rocket.engine, [Validators.required]],
      fuel: this.buildFuels(),
      company: [rocket.company, [Validators.required]],
      date: [rocket.date, [Validators.required]],
    });
  }

  buildFuels() {
    const values = this.fuels.map(v => new FormControl(false));
    console.log(values);
    return this.fb.array(values)
  }

  getEngines() {
    return [
      { value: 'raptor', desc: 'Raptor' },
      { value: 'scramjet', desc: 'Scramjet' },
    ]
  }

  getControls() {
    return (this.form.get('fuel') as FormArray).controls;
  }

  onSubmit() {

    let valueSubmit = Object.assign({}, this.form.value);

    valueSubmit = Object.assign(valueSubmit, {
      fuel: valueSubmit.fuel
        .map((v: any, i: any) => v ? this.fuels[i] : null)
        .filter((v: any) => v !== null)
    });

    console.log(valueSubmit)

    if (this.form.valid && valueSubmit.fuel !== [false, false] ) {
      this.save(valueSubmit).subscribe(() => {console.log(this.form.value)});
      alert("Sucesso!");
    }
    else {
      alert("Erro! Verifique se todos os campos estão preenchidos!");
    }
  }

  save(rocket: any){
    if (rocket.id) {
      return this.service.update(rocket);
    }
    return this.service.create(rocket);
  }
}
