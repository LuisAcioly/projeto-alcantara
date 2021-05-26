import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Rocket } from '../rocket';

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

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let register = null;

    this.route.params.subscribe((params: any) => {
        const id = params.id;
        const rocket$ = this.loadById(id);
        rocket$.subscribe( rocket => {
          register = rocket;
          this.updateForm(rocket)
        });
      });

      console.log(register);

    this.form = this.fb.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      engine: [null, [Validators.required]],
      fuel: this.buildFuels(),
      company: [null, [Validators.required]],
      date: [null, [Validators.required]],
    });
  }

  loadById(id: any) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
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

  updateForm(rocket: any){
    this.form.patchValue({
      id: rocket.id,
      name: rocket.name,
      engine: rocket.engine,
      fuel: rocket.fuel,
      company: rocket.company,
      date: rocket.date,
    })
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

    if (this.form.valid) {
      this.http
        .post<any>(this.API, valueSubmit)
        .subscribe(
          data => {
            console.log(data);
          },
        );
      alert("Sucesso!");
    }
    else {
      alert("Erro! Verifique se todos os campos estão preenchidos!");
    }
  }

  onCancel() {

  }
}
