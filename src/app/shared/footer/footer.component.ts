import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
  <footer>
    <div class="footer-content">
      <p>Desarrollado por <a href="https://www.facundoguzman.site" target="_blank">facundoguzman.site</a></p>    
    </div>
  </footer>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
