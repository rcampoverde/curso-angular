import { Component, inject } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  nombre: string = 'Rubén';
  apellido: string = 'Campoverde';
  loadingVisible: boolean = false;

  private readonly router: Router = inject(Router);

  changeVisible(): void {
    this.loadingVisible = !this.loadingVisible;
    setTimeout(() => {
      this.loadingVisible = !this.loadingVisible;
    }, 2000);
  }

  redirectPaginaTabla(): void {
    this.router.navigate(['tabla']);
  }
}
