import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'form-alert-component',
  templateUrl: 'form-alert.component.html',
  styleUrls: ['form-alert.component.css'],
})
export class FormAlertComponent {
  @Input() field: FormControl;

  public get validatorMessages() {
    if (!this.field || !this.field.errors) {
      return false;
    }
    let errors = [];
    let config = {
      required: 'поле повинно бути заповнено',
      pattern: 'заборонені символи',
      equalTo: 'паролі не співпадають',
      rangeLength: 'неправильна довжина',
    };

    Object.keys(this.field.errors).forEach((error: string) => {
      errors.push(config[error]);
    });

    return errors;
  }
}