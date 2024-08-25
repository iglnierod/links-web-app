import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  imageUrl =
    'https://lastfm.freetls.fastly.net/i/u/avatar170s/530be1b0798317b44e8de9c2f2a22dfe.gif';
  name = 'Rodrigo Iglesias';
  description = 'Técnico desarrollador de aplicaciones multiplataforma.';
}
