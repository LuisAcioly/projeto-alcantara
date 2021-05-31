import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SatellitesService } from '../satellites-service';

@Component({
  selector: 'app-satellites-form',
  templateUrl: './satellites-form.component.html',
  styleUrls: ['./satellites-form.component.scss']
})
export class SatellitesFormComponent implements OnInit {

  form!: FormGroup;
  types = ['Comunicação ', 'Televisão', 'Científico', 'Meteorológico', 'Sensoriamento', 'Militar'];

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private service: SatellitesService) { }

  ngOnInit(): void {
    const satellite = this.route.snapshot.data['satellite'];

    this.form = this.fb.group({
      id: [satellite.id],
      name: [satellite.name, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      type: [satellite.type, [Validators.required]],
    });
  }

  onSubmit(){
    let valueSubmit = Object.assign({}, this.form.value);

    /* valueSubmit = Object.assign(valueSubmit, {
      fuel: valueSubmit.fuel
        .map((v: any, i: any) => v ? this.types[i] : null)
        .filter((v: any) => v !== null)
    }); */

    console.log(valueSubmit);

    if (this.form.valid) {
      this.save(valueSubmit).subscribe(() => {console.log(this.form.value)});
      alert("Sucesso!");
    }
    else {
      alert("Erro! Verifique se todos os campos estão preenchidos!");
    }
  }

  save(satellite: any){
    if (satellite.id) {
      return this.service.update(satellite);
    }
    return this.service.create(satellite);
  }

}
