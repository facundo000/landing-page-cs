import { transition } from '@angular/animations';
import { Component, ElementRef, HostListener, signal, ViewChild, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header id="home">
      <div class="top-bar">
        <div class="contact-info">
          <a href="tel:351-1235160" class="info-item">
            <span class="icon"> <i class="i-phone"></i></span> 351-1235160
          </a>
          <a href="https://www.instagram.com/cellsolutions.oficial/?hl=es-la" target="_blank" class="info-item">
            <span class="icon"><i class="i-instagram"></i></span> cs
          </a>
          <span class="info-item">
            <span class="icon"><i class="i-clock"></i></span> Lun - Vier 8am - 17pm, Sáb 8am - 13pm
          </span>
        </div>
      </div>
      <nav class="main-nav">
      <a (click)="scrollToSection('home')" >
        <div class="logo">
          <img src="/img/logo_cs.webp" alt="Cell Solutions" />
        </div>
      </a>  
        <div class="nav-links" [class.active]="menuOpen()">
          <a (click)="scrollToSection('servicio-tecnico')" 
             class="nav-link" 
             [class.active-link]="activeSectionId() === 'servicio-tecnico'">Servicio técnico</a>
          <a (click)="scrollToSection('accesorios')" 
             class="nav-link"
             [class.active-link]="activeSectionId() === 'accesorios'">Accesorios</a>
          <a (click)="scrollToSection('insumos')" 
             class="nav-link"
             [class.active-link]="activeSectionId() === 'insumos'">Insumos informáticos</a>
          <a (click)="scrollToSection('contacto')" 
             class="nav-link"
             [class.active-link]="activeSectionId() === 'contacto'">Contacto</a>
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
            <img src="/img/reparacion-cel.png" class="d-block w-100 img-1" alt="Insumos informáticos">
            <div class="carousel-caption  d-md-block">
              <h4>Reparación de Celulares</h4>
              <p>Servicio técnico profesional specializado en telefonía móvil</p>
            </div>
          </div>

          <div class="carousel-item carousel-img">
            <img src="/img/carousel-2.webp" class="d-block w-100 img-2 accesorios" alt="Accesorios para celulares">
            <div class="carousel-caption  d-md-block">
              <h4>Venta de Accesorios</h4>
              <p>Fundas, Case Space magnética y más</p>
            </div>
          </div>

          <div class="carousel-item carousel-img">
            <img src="/img/carousel-3.webp" class="d-block w-100 carousel-img img-2" style="background-color: var(--sc-color);" alt="Insumos Informáticos">
            <div class="carousel-caption  d-md-block">
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
      padding-top: 82px;
    }

    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }

    .icon i {
      display: block;
      width: 100%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .i-phone {
      background-image: url('/icons/phone-i.svg');
    }

    .i-instagram {
      background-image: url('/icons/instagram-i.svg');
    }

    .i-clock {
      background-image: url('/icons/time-svgrepo-com.svg');
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
      color: var(--sc-color);
    }
    
    .main-nav {
      background-color: var(--pc-color);
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      position: fixed; 
      top: 0; 
      left: 0;
      width: 100%; 
      z-index: 1000; 
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
      transition: all 0.3s ease;
      position: relative;
      cursor: pointer;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: var(--sc-color);
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after,
    .nav-links a.active-link::after {
      width: 100%;
    }

    .nav-links a:hover,
    .nav-links a.active-link {
      color: var(--sc-color);
    }

    .menu-toggle {
      display: none;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 10px;
      z-index: 100;
      color: black;
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

    .carousel-item {
      position: relative;
      aspect-ratio: 16/9;
      max-height: 80vh;
    }

    .carousel-inner img {      
      filter: brightness(0.5) contrast(1.3) saturate(0.8);
    }

    
    .carousel-item .img-2 {
      width: 100%;
      height: 100%;
    }

    .carousel-item.active .img-1 {
      object-position: top;
      margin-top: 0%;
      transition: all 0.3s ease;
    }

    .carousel-item .img-2,
    .carousel-item .img-3 {
      object-position: center;
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
        top: 1.5rem;
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

      .img-2 {        
        height: 100%;        
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

      .accesorios{
        width: 32.3rem !important;
      }

      .carousel-item {
        max-height: 50vh;
      }

    }
    .carousel-caption h4 {
      font-size: 1.1rem;
    }
  
    .carousel-caption p {
      font-size: 0.8rem;
    }
  
    .carousel-item {
      aspect-ratio: 3/4;
      max-height: 60vh;
    }

    /* Primer item - altura completa sin recorte */
    .carousel-item.active .img-1 {
      object-fit: contain;      
      object-position: top;
      background-color: #000; /* Fondo para espacios vacíos */
    }

    /* Ajuste de controles para móvil */
    .carousel-control-prev,
    .carousel-control-next {
      top: 45%;
      transform: translateY(-50%);
    }

    .carousel-caption {
      bottom: 15%;
      padding: 10px;
    }

    .nav-links.active {
      right: 0;
    }

    .nav-link a {
      padding: 10px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav-link a::after {
      display: none;
    }
  
    
  `]
})
export class HeaderComponent implements OnInit {  
  menuOpen = signal(false);
  activeSectionId = signal('');

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    // Inicializar Scrollspy
    const sections = document.querySelectorAll('section[id]');
    
    const scrollSpy = () => {
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          this.activeSectionId.set(sectionId || '');
        }
      });
    };

    window.addEventListener('scroll', scrollSpy);
    window.addEventListener('load', scrollSpy);
  }

  toggleMenu() {
    this.menuOpen.update(state => !state);
  }

  scrollToSection(sectionId: string) {    
    this.viewportScroller.scrollToAnchor(sectionId);
    // Cerrar el menú móvil si está abierto
    if (this.menuOpen()) {
      this.toggleMenu();
    }
  }
}