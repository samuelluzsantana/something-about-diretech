import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavigation } from './header.types';

@Component({
  selector: 'ui-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  @Input() data!: HeaderNavigation;
}
