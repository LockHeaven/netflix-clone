import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'back-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg role="img" class="h-12 w-12" viewBox="0 0 1024 1024" fill="#000000">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#ffffff"
          d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        ></path>
        <path
          fill="#ffffff"
          d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        ></path>
      </g>
    </svg>
  `,
  styles: ``,
})
export class BackIconComponent {}
