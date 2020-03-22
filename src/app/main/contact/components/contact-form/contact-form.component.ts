import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactModel } from '../../models';
import { takeUntilDestroy } from '@app/core/destroyable';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnChanges {
  @Input() contact: ContactModel;
  @Output() valueChange = new EventEmitter();

  get invalid(): boolean {
    return this.form.invalid;
  }
  get dirty(): boolean {
    return this.form.dirty;
  }
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.contact && this.contact) {
      this.updateFormValue(this.contact);
    }
  }

  ngOnInit() {
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      name: [null, Validators.required],
      phone: [null, Validators.required],
      website: [null],
      address: this.formBuilder.group({
        street: [null],
        suite: [null],
        city: [null]
      })
    });

    this.form.valueChanges.pipe(
      takeUntilDestroy(this)
    ).subscribe(() => {
      this.onFormValuesChanged();
    });
  }

  private updateFormValue(newValue: ContactModel): void {
    this.form.patchValue(newValue);
  }

  private onFormValuesChanged() {
    this.valueChange.emit({
      valid: this.form.valid,
      value: this.form.value
    });
  }

}
