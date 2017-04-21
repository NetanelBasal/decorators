import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-password-form',
  template: `
    <div [formGroup]="group">
      <input type="text" placeholder="Password" [formControl]="password">
      <input type="text" placeholder="Confirm Password" [formControl]="confirm">
      {{group.valid}}
    </div>
  `,
})
export class PasswordFormComponent {
  @Input('formGroup') group;

  get password() {
    return this.group.get('password');
  }

  get confirm() {
    return this.group.get('confirm');
  }

}
