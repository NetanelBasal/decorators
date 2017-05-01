import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h1>Home page</h1>
      <app-password-form [formGroup]="form"></app-password-form>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  form : FormGroup;

  constructor( public store : Store<any> ) {
    this.form = new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      confirm: new FormControl(null, Validators.required),
      address: new FormGroup({
        a: new FormControl(null, Validators.required),
        b: new FormControl(null, Validators.required),
        c: new FormGroup({
          d: new FormControl(null, Validators.required),
          e: new FormControl(null, Validators.required),
        })
      }),
      props: new FormArray([new FormGroup({ age: new FormControl(null, Validators.required) }), new FormGroup({ age: new FormControl(null, Validators.required) })]),
      skills: new FormArray([new FormControl(null, Validators.required), new FormControl(null, Validators.required)])
    });

    // console.log(this.form.controls);

    this.form.valueChanges.subscribe(r =>  console.log('errros', flatFormErrors(this.form.controls)))

    function flatFormErrors( formGroup ) {
      return Object.keys(formGroup).reduce(( acc : any, controlKey : any ) => {
        if( formGroup[controlKey] instanceof FormControl ) {
          acc[controlKey] = formGroup[controlKey].errors;
        } else {
          if( formGroup[controlKey] instanceof FormGroup ) {
            acc[controlKey] = flatFormErrors(formGroup[controlKey].controls);
          }
          if( formGroup[controlKey] instanceof FormArray ) {
            acc[controlKey] = formGroup[controlKey].controls.map(control => {
              if( control instanceof FormGroup ) {
                return flatFormErrors(control.controls);
              } else {
                return control.errors;
              }
            });
          }
        }
        return acc;
      }, {});
    }

    console.log('errros', flatFormErrors(this.form.controls));

  }

  ngOnInit() {

  }

}
