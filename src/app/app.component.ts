import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { WhatsappButtonComponent } from './shared/whatsappButton/whatsappButton.component';
import { ServicioTecnicoComponent } from './pages/servicio-tecnico/servicio-tecnico.component';
import { AccesoriosComponent } from "./pages/accesorios/accesorios.component";
import { InsumosInformaticosComponent } from "./pages/insumos-informaticos/insumos-informaticos.component";
import { ReseniasComponent } from './pages/resenias/resenias.component';
import { ContactoComponent } from "./pages/contacto/contacto.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    WhatsappButtonComponent,
    ServicioTecnicoComponent,
    AccesoriosComponent,
    InsumosInformaticosComponent,
    ReseniasComponent,
    ContactoComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cell-solutions';
}
