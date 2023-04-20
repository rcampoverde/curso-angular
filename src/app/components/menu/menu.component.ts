import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  listMenu!: MenuItem[];

  ngOnInit(): void {
    this.initListaMenu();
  }

  initListaMenu(): void {
    this.listMenu = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: '/inicio' },
      { label: 'Tabla', icon: 'pi pi-fw pi-calendar', routerLink: '/tabla' }
    ];
  }
}
