import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent {
  private readonly roter: Router = inject(Router);
  backInicio(): void {
    this.roter.navigate(['inicio']);
  }
}
