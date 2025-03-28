import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  template: `  
  <section id="contacto" class="contacto-container">
  <h2 class="contacto-titulo">Contacto</h2>
  
  <div class="contacto-content">
    <div class="contacto-mapa">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.3656137422995!2d-64.27345628939612!3d-31.32127447419851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329c41239e2343%3A0x78f1535c02d6674d!2sCell%20Solutions!5e0!3m2!1ses!2sar!4v1742410419607!5m2!1ses!2sar" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">    
      </iframe>
    </div>
    
    <div class="contacto-info">
      <div class="info-item">
        <div class="icon-container">
          <i class="icon location-icon"></i>
        </div>
        <div class="info-text">
          <h3>Dirección:</h3>
          <p>Tte. Gral. Donato Alvarez 8720</p>
        </div>
      </div>
      
      <div class="info-item">
        <div class="icon-container">
          <i class="icon clock-icon"></i>
        </div>
        <div class="info-text">
          <h3>Horario:</h3>
          <p>Lun - Sab</p>
          <p>9 - 13 y 17 - 20:30</p>
        </div>
      </div>
      
      <div class="info-item">
        <div class="icon-container">
          <i class="icon phone-icon"></i>
        </div>
        <div class="info-text">
          <h3>Teléfono:</h3>
          <p><a href="tel:351-4327161" class="info-item">351-4327161 </a></p>
        </div>
      </div>
      
      <div class="info-item">
        <div class="icon-container">
          <i class="icon instagram-icon"></i>
        </div>
        <div class="info-text">            
          <h3>Instagram:</h3>
          <p> <a href="https://www.instagram.com/cellsolutions.oficial/?hl=es-la" target="_blank" class="info-item">cellsolutions.oficial</a> </p>
        </div>
      </div>
      
      <div class="newsletter">
        <h3>Suscríbete a nuestro newsletter:</h3>
        <div class="newsletter-form">
          <input type="email" placeholder="Tu email" class="email-input">
          <button type="submit" class="submit-btn">
            <i class="icon mail-icon"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent { }