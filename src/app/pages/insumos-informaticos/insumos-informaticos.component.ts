import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-insumos-informaticos',
  imports: [],
  template: `
  <section id="insumos">
    <h2>Insumos Informáticos</h2>
    <div class="products">
      <div class="card">
        <img src="/img/microfono-parlante.webp" alt="Microfono Karaoke">
        <div class="card-content">
          <h3>Microfono Karaoke</h3>
        </div>
      </div>
      <div class="card">
        <img src="/img/mando-ps4.webp" alt="mando ps4">
        <div class="card-content">
          <h3>Joystick ps4</h3>
        </div>
      </div>
      <div class="card">
        <img src="/img/auriculares-bt.webp" alt="Auriculares bluetooth">
        <div class="card-content">
          <h3>Auriculares Inalambrico</h3>
        </div>
      </div>
      <div class="card">
        <img src="/img/gatillos-celular.webp" alt="Gatillos para Celular">
        <div class="card-content">
          <h3>Gatillos para Celular</h3>
        </div>
      </div>
    </div>
  </section>
  `,
  styleUrl: './insumos-informaticos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsumosInformaticosComponent { }