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
     <p-galleria [value]="images" [responsiveOptions]="responsiveOptions"  [numVisible]="5">
         <ng-template pTemplate="item" let-item>
             <img [src]="item.itemImageSrc" class="gallery-image" />
         </ng-template>
         <ng-template pTemplate="thumbnail" let-item>
             <img [src]="item.thumbnailImageSrc" class="gallery-thumbnail"/>
         </ng-template>
     </p-galleria>
    </div>
  </section>
  `,
  styleUrl: './accesorios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccesoriosComponent  implements OnInit {
  images: any[] | undefined;
  // images = model([]);

  responsiveOptions: any[] | undefined;

  // constructor(private photoService: PhotoService) {}

  ngOnInit() {
    
    this.images = [
      {
        itemImageSrc: '/img/caousel-3.png',
        thumbnailImageSrc: '/img/caousel-3.png',
        alt: 'Descripción de accesorio 1',
        title: 'Accesorio 1'
      },
      {
        itemImageSrc: '/img/carousel-1.webp',
        thumbnailImageSrc: '/img/carousel-1.webp',
        alt: 'Descripción de accesorio 2',
        title: 'Accesorio 2'
      },
      {
        itemImageSrc: '/img/carousel-1.webp',
        thumbnailImageSrc: '/img/carousel-1.webp',
        alt: 'Descripción de accesorio 2',
        title: 'Accesorio 2'
      },
      {
        itemImageSrc: '/img/caousel-3.png',
        thumbnailImageSrc: '/img/caousel-3.png',
        alt: 'Descripción de accesorio 1',
        title: 'Accesorio 1'
      },
      {
        itemImageSrc: '/img/caousel-3.png',
        thumbnailImageSrc: '/img/caousel-3.png',
        alt: 'Descripción de accesorio 1',
        title: 'Accesorio 1'
      },
      // Agrega más imágenes según necesites
    ];
    
    this.responsiveOptions = [
        {
            breakpoint: '10px',
            numVisible: 4
        },
        {
            breakpoint: '20px',
            numVisible: 1
        }
    ];
  }
 }
