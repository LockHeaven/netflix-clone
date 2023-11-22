import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-control',
  templateUrl: './input.component.html',
  standalone: true,
  imports: [CommonModule],
  styles: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() id: string = '';
  @Input() onChange: string = '';
  @Input() label: string = '';
  @Input() type: string = '';
  value: string = '';
  onChangeCb!: Function;

  changeText(event: Event): void {
    const value = event.target as HTMLInputElement;
    this.onChangeCb(value.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
