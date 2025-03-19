import { ChangeDetectionStrategy, Component, model, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-accesorios',
  imports: [GalleriaModule],
  standalone: true,
  template: `
  <section>
    <h2>Accesorios</h2>
    <div class="card">
     <p-galleria [value]="images()" [responsiveOptions]="responsiveOptions" 
       [containerStyle]="{ 'max-width': '100%' }" [numVisible]="5"
       [showThumbnails]="true" [showIndicators]="true" [circular]="true">
         <ng-template pTemplate="item" let-item>
          <div class="image-container">  
            <img [src]="item.itemImageSrc" [alt]="item.alt" class="gallery-image" loading="lazy"/>
            <h4  class="image-title">{{item.title}}</h4>
          </div>
         </ng-template>
         <ng-template pTemplate="thumbnail" let-item>
             <img [src]="item.thumbnailImageSrc" [alt]="item.alt" class="gallery-thumbnail" loading="lazy"/>
         </ng-template>
     </p-galleria>     
    </div>
  </section>
  `,
  styleUrl: './accesorios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccesoriosComponent {
  images = model<any[]>([]);

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 4,
      numScroll: 2
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 2
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor() {
    this.images.set([
      {
        itemImageSrc: '/img/funda-iphone.webp',
        thumbnailImageSrc: '/img/funda-iphone.webp',
        alt: 'Accesorio deportivo',
        title: 'Funda iphone'
      },
      {
        itemImageSrc: '/img/funda-cel.webp',
        thumbnailImageSrc: '/img/funda-cel.webp',
        alt: 'Kit completo',
        title: 'Funda de Samsung'
      },
      {
        itemImageSrc: '/img/accesorio-p-celular.webp',
        thumbnailImageSrc: '/img/accesorio-p-celular.webp',
        alt: 'Accesorio deportivo',
        title: 'Soporte para celular'
      },
      {
        itemImageSrc: '/img/protector-pantalla.webp',
        thumbnailImageSrc: '/img/protector-pantalla.webp',
        alt: 'Kit completo',
        title: 'Vidrio Templado'
      },
    ]);
  }

 }
