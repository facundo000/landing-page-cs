import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  template: `  
  <div class="contacto-container">
  <h1 class="contacto-titulo">Contacto</h1>
  
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
          <p>Av. Principal #123</p>
        </div>
      </div>
      
      <div class="info-item">
        <div class="icon-container">
          <i class="icon clock-icon"></i>
        </div>
        <div class="info-text">
          <h3>Horario:</h3>
          <p>Lun - Vier 8am - 17pm</p>
          <p>Sáb 8am - 13pm</p>
        </div>
      </div>
      
      <div class="info-item">
        <div class="icon-container">
          <i class="icon phone-icon"></i>
        </div>
        <div class="info-text">
          <h3>Teléfono:</h3>
          <p>123456789112</p>
        </div>
      </div>
      
      <div class="info-item">
        <div class="icon-container">
          <i class="icon instagram-icon"></i>
        </div>
        <div class="info-text">
          <h3>Instagram:</h3>
          <p>instagram</p>
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
</div>
  `,
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent { }
