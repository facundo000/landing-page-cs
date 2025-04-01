import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { WhatsappButtonComponent } from './shared/whatsappButton/whatsappButton.component';
import { ServicioTecnicoComponent } from './pages/servicio-tecnico/servicio-tecnico.component';
import { AccesoriosComponent } from "./pages/accesorios/accesorios.component";
import { InsumosInformaticosComponent } from "./pages/insumos-informaticos/insumos-informaticos.component";
import { ReseniasComponent } from './pages/resenias/resenias.component';
import { ContactoComponent } from "./pages/contacto/contacto.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    WhatsappButtonComponent,
    ServicioTecnicoComponent,
    AccesoriosComponent,
    InsumosInformaticosComponent,
    ReseniasComponent,
    ContactoComponent,
    FooterComponent,
    ScrollTopComponent,
    AnimateOnScrollModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('0.3s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'cell-solutions';
// outlet: RouterOutlet;


  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }
}
