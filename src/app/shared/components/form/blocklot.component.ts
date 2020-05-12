import { Component, forwardRef, Input, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import { Subscription } from 'rxjs';

// describes what the return value of the form control will look like
export interface BlockLotValues {
  block: string;
  lot: string;
}
// tslint:disable: no-forward-ref
@Component({
  selector: 'app-blocklot',
  templateUrl: './blocklot.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BlockLotFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => BlockLotFormComponent),
      multi: true
    }
  ]
})
export class BlockLotFormComponent implements ControlValueAccessor, OnDestroy {
  @Input() index: number;
  form: FormGroup;
  subscriptions: Array<Subscription> = [];

  get value(): BlockLotValues {
    return this.form.value;
  }

  set value(value: BlockLotValues) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get blockLotControl(): AbstractControl {
    return this.form.controls.blocklot;
  }

  constructor(readonly formBuilder: FormBuilder) {
    // create the inner form
    this.form = this.formBuilder.group({
      block: ['', Validators.required],
      lot: ['', Validators.required]
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => { s.unsubscribe(); });
  }

  // tslint:disable: no-empty
  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  writeValue(value): void {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn): void {
    this.onTouched = fn;
  }

  // communicate the inner form validation to the parent form
  validate(_: FormControl): undefined | {blocklot: {valid: boolean}} {
    return this.form.valid ? undefined : { blocklot: { valid: false } };
  }
}
