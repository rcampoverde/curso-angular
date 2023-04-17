import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {EmpleadoService} from "../../services/empleado.service";
import {IDataEmpleado, IEmpleado} from "../../interfaces/empleado.interface";

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent {
  private readonly router: Router = inject(Router);
  private readonly empleadoService: EmpleadoService = inject(EmpleadoService);

  employees!: IDataEmpleado[];
  backInicio(): void {
    this.router.navigate(['inicio']);
  }

  ngOnInit(): void {
    this.empleadoService.getAllEmployees().subscribe({
      next: (res: IEmpleado) => this.employees = res.data,
      error: (error: any) => console.log(error)
    });
  }
}
