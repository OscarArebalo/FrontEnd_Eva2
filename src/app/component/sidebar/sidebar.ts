import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  items = [
    { label: 'Dashboard', route: '/dashboard', svg: 'M3 13h4v8H3z M21 13h-4v8h4z M7 3h10v10H7z' },
    { label: 'Usuarios', route: '/users', svg: 'M12 12a5 5 0 100-10 5 5 0 000 10z M4 21v-1a4 4 0 014-4h8a4 4 0 014 4v1' },
    { label: 'Reportes', route: '/reports', svg: 'M3 3v18h18' },
    { label: 'Ajustes', route: '/settings', svg: 'M12 15.5A3.5 3.5 0 1115.5 12 3.5 3.5 0 0112 15.5z' },
    { label: 'Cerrar sesión', route: '/logout', svg: 'M16 17l5-5-5-5M21 12H9' }
  ];
}
