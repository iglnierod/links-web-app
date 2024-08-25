import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  standalone: true,
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css'],
})
export class SocialsComponent {
  socials = [
    {
      icon: 'bi bi-facebook', // Clase del icono de Bootstrap
      name: 'Facebook',
      url: 'https://www.facebook.com',
    },
    {
      icon: 'bi bi-twitter', // Clase del icono de Bootstrap
      name: 'Twitter',
      url: 'https://www.twitter.com',
    },
    {
      icon: 'bi bi-instagram', // Clase del icono de Bootstrap
      name: 'Instagram',
      url: 'https://www.instagram.com',
    },
    {
      icon: 'bi bi-linkedin', // Clase del icono de Bootstrap
      name: 'LinkedIn',
      url: 'https://www.linkedin.com',
    },
    {
      icon: 'bi bi-youtube', // Clase del icono de Bootstrap
      name: 'YouTube',
      url: 'https://www.youtube.com',
    },
    {
      icon: 'bi bi-github', // Clase del icono de Bootstrap
      name: 'GitHub',
      url: 'https://www.github.com',
    },
    {
      icon: 'bi bi-whatsapp', // Clase del icono de Bootstrap
      name: 'WhatsApp',
      url: 'https://www.whatsapp.com',
    },
    {
      icon: 'bi bi-telegram', // Clase del icono de Bootstrap
      name: 'Telegram',
      url: 'https://www.telegram.org',
    },
  ];
}
