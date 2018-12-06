import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Home',  icon: 'home', class: '' },
    { path: '/user-profile', title: 'Perfil Usuario',  icon:'person', class: '' },
    //table-list
    { path: '/remesas', title: 'Remesas',  icon:'content_paste', class: '' },
    //typography
    { path: '/presupuestos', title: 'Presupuestos',  icon:'attach_money', class: '' },
    { path: '/panelAdministracion', title: 'Panel de Administracion',  icon:'dashboard', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
