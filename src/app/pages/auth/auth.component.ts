import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
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
