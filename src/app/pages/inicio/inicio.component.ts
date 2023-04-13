import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  nombre: string = 'Rubén';
  apellido: string = 'Campoverde';
  loadingVisible: boolean = false;

  changeVisible(): void {
    this.loadingVisible = !this.loadingVisible;
    setTimeout(() => {
      this.loadingVisible = !this.loadingVisible;
    }, 2000);
  }
}
