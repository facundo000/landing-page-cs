import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="scroll-top" 
      [class.visible]="isVisible"
      (click)="scrollToTop()"
      aria-label="Ir hacia arriba">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4l-8 8h16z"/>
      </svg>
    </button>
  `,
  styles: [`
    .scroll-top {
      position: fixed;
      bottom: 30px;
      left: 30px;
      width: 50px;
      height: 50px;
      background-color: var(--pc-color);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .scroll-top.visible {
      opacity: 1;
      visibility: visible;
    }

    .scroll-top:hover {
      background-color: var(--sc-color);
      transform: translateY(-3px);
    }

    .scroll-top svg {
      width: 24px;
      height: 24px;
      color: white;
    }

    @media (max-width: 768px) {
      .scroll-top {
        width: 40px;
        height: 40px;
        bottom: 20px;
        left: 20px;
      }

      .scroll-top svg {
        width: 20px;
        height: 20px;
      }
    }
  `]
})
export class ScrollTopComponent {
  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
} 