import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  template: ` 
  <a href="https://wa.me/123456789" 
         class="whatsapp-button" 
         target="_blank"
         aria-label="Contactar por WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24" 
             fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.153 23.486l4.452-2.131A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5h-3v-3h3v3zm0-4.5h-3v-3h3v3zm4.5 4.5h-3v-3h3v3zm0-4.5h-3v-3h3v3z"/>
        </svg>
  </a>
`,
  styleUrl: './whatsappButton.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButtonComponent { }
