import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rocket-form',
  templateUrl: './rocket-form.component.html',
  styleUrls: ['./rocket-form.component.scss']
})
export class RocketFormComponent implements OnInit {

  form!: FormGroup;
  fuels = ['Hidrogênio', 'Oxigênio'];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      engine: [null, [Validators.required]],
      fuels: this.buildFuels(),
      company: [null, [Validators.required]],
      date: [null, [Validators.required]],
    });
  }

  buildFuels(){
    const values = this.fuels.map(v => new FormControl(false));
    console.log(values);
    return this.fb.array(values)
  }

  getControls() {
    return (this.form.get('fuels') as FormArray).controls;
  }

  onSubmit(){
    console.log(this.form.value)
    if(this.form.valid){
      console.log("submit")
    }
  }

  onCancel(){

  }
}
