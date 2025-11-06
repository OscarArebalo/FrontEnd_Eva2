// typescript
import { Component, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnDestroy {
  private collapsed = false;

  constructor(private renderer: Renderer2) {}

  toggleSidebar(): void {
    this.collapsed = !this.collapsed;
    const body = document.body;
    if (this.collapsed) {
      this.renderer.addClass(body, 'sidebar-collapsed');
    } else {
      this.renderer.removeClass(body, 'sidebar-collapsed');
    }
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'sidebar-collapsed');
  }
}
