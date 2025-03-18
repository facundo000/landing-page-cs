import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <div class="top-bar">
        <div class="contact-info">
          <a href="tel:123-456-7890" class="info-item">
            <span class="icon">📞</span> 123-456-7890
          </a>
          <a href="https://instagram.com" target="_blank" class="info-item">
            <span class="icon">📸</span> instagram
          </a>
          <span class="info-item">
            <span class="icon">🕒</span> Lun - Vier 8am - 17pm, Sáb 8am - 13pm
          </span>
        </div>
      </div>
      <nav class="main-nav">
        <div class="logo">
          <img src="/img/logo_cs.png" alt="Cell Solutions" />
        </div>
        <div class="nav-links" [class.active]="menuOpen()">
          <a href="/servicio-tecnico">Servicio técnico</a>
          <a href="/accesorios">Accesorios</a>
          <a href="/insumos">Insumos informáticos</a>
          <a href="/contacto">Contacto</a>
        </div>
        <button class="menu-toggle" (click)="toggleMenu()" aria-label="Toggle menu">
          <span [class.open]="menuOpen()"></span>
          <span [class.open]="menuOpen()"></span>
          <span [class.open]="menuOpen()"></span>
        </button>
      </nav>

      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active carousel-img">
            <img src="/img/carousel-1.webp" class="d-block w-100 img-1 carousel-overlay" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h4>Reparación de Celulares</h4>
              <p>Servicio técnico profesional specializado en telefonía móvil</p>
            </div>
          </div>

          <div class="carousel-item carousel-img">
            <img src="/img/items.gif" class="d-block w-100 img-2 carousel-overlay" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h4>Venta de Accesorios</h4>
              <p>Fundas, Case Space magnética y más</p>
            </div>
          </div>

          <div class="carousel-item carousel-img">
            <img src="/img/caousel-3.png" class="d-block w-100 carousel-img img-2 carousel-overlay" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h4>Insumos Informáticos</h4>
              <p>Kit Gamer Noganet, Smartwatches y mucho más</p>
            </div>
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </header>
  `,
  styles: [`
    header {
      width: 100%;
    }

    .top-bar {      
      padding: 8px 0;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: center;
    }

    .contact-info {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      gap: 24px;
      padding: 0 16px;
    }

    .info-item {
      color: var(--font-color);
      text-decoration: none;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .info-item:hover {
      color: #333;
    }

    .main-nav {
      background-color: var(--pc-color);
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      position: relative;
    }

    .logo img {
      height: 50px;
      width: auto;
    }

    .nav-links {
      display: flex;
      gap: 32px;
      margin-right: 2rem;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-links a:hover {
      color: var(--sc-color);
    }

    .menu-toggle {
      display: none;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 10px;
      z-index: 100;
    }

    .menu-toggle span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: white;
      margin: 5px 0;
      transition: all 0.3s ease;
    }

    .menu-toggle span.open:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .menu-toggle span.open:nth-child(2) {
      opacity: 0;
    }

    .menu-toggle span.open:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }

    .carousel-img {
      height: 20rem;      
      
      .img-1 {
        height: 58rem;    
        filter: brightness(0.5) contrast(1.3) saturate(0.8);
      }

      .img-2{
        filter: brightness(0.5) contrast(1.3) saturate(0.8);
      }
    }

    @media (max-width: 768px) {
      .contact-info {
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }      

      .menu-toggle {
        display: block;
      }

      .nav-links {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 6.5rem;
        right: -300px;
        width: 250px;
        height: 100vh;
        background-color: var(--pc-color);
        padding: 80px 20px 20px 20px;
        transition: right 0.3s ease;
        gap: 20px;
        margin-right: 0;
        z-index: 99;
      }

      .carousel-img {
      height: 20rem;

      .img-1 {
        height: auto;
      }
      .img-2 {
        height: 100%
      }
    }

      .nav-links.active {
        right: 0;
        // top: 6rem;
      }

      .nav-links a {
        padding: 10px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
    }

    @media (max-width: 480px) {
      .top-bar {
        padding: 5px 0;
      }

      .info-item {
        font-size: 12px;
      }

      .logo img {
        height: 40px;
      }
    }
  `]
})
export class HeaderComponent {  
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(state => !state);
  }

  
  
}