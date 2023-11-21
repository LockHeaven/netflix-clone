import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';


const components = [
  InputComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ], 
  exports: [components]
})
export class ComponentsModule { }
