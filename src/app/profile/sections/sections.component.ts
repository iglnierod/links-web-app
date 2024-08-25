import { Component } from '@angular/core';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css',
})
export class SectionsComponent {
  sections = [
    {
      title: 'Personal Projects',
      links: [
        { name: 'Portfolio', url: 'https://yourportfolio.com' },
        { name: 'Blog', url: 'https://yourblog.com' },
      ],
    },
    {
      title: 'Social Media',
      links: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourprofile' },
        { name: 'Twitter', url: 'https://twitter.com/yourprofile' },
      ],
    },
    {
      title: 'Other Links',
      links: [
        { name: 'GitHub', url: 'https://github.com/yourusername' },
        { name: 'YouTube', url: 'https://youtube.com/yourchannel' },
      ],
    },
  ];
}
