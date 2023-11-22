import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from 'src/app/components/input/input.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  variantLogin = true;

  formulario: any;
  constructor(private fb: FormBuilder, private route: Router) {
    this.formulario = this.fb.group({
      nombre: [''],
    });
  }

  goProfiles(): void {
    this.route.navigate(['/profiles']);
  }
}
