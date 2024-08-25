import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SectionsComponent } from './sections/sections.component';
import { SocialsComponent } from './socials/socials.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, SocialsComponent, SectionsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {}
