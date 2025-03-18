import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-servicio-tecnico',
  imports: [],
  template: `
  <section class="servicio-tecnico">
      <h1>Servicio Técnico</h1>
      
      <div class="services-grid">        
        <div class="card">
          <div class="card__content">
            <img src="/img/telefono-inteligente.png" class="icon" alt="">
            <h3>Reparación de Pantallas</h3>
            <p>Reemplazamos pantallas rotas con repuestos de alta calidad</p>
          </div>
        </div>

        <div class="card">
          <div class="card__content">
            <img src="/img/bateria-llena.png" class="icon" alt="">
            <h3>Cambio de Baterías</h3>
            <p>Restauramos la vida de tu dispositivo con baterías originales</p>
          </div>
        </div>

        <div class="card">
          <div class="card__content">
            <img src="/img/carga-del-telefono.png" class="icon" alt="">
            <h3>Problemas de Carga</h3>
            <p>Reparamos puertos de carga y sistemas de alimentación</p>
          </div>
        </div>
      </div>

    </section>
  `,
  styleUrl: './servicio-tecnico.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicioTecnicoComponent { }
