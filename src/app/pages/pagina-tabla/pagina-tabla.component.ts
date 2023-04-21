import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmpleadoService} from "../../services/empleado.service";
import {IDataEmpleado, IEmpleado} from "../../interfaces/empleado.interface";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css'],
})
export class PaginaTablaComponent implements OnInit{
  private readonly router: Router = inject(Router);
  private readonly empleadoService: EmpleadoService = inject(EmpleadoService);
  private readonly messageService: MessageService = inject(MessageService);

  columnasTabla: any = [];
  loading: boolean = false;
  employees: IDataEmpleado[] = [];

  backInicio(): void {
    this.router.navigate(['inicio']).then();
  }

  ngOnInit(): void {
    this.initColumnaTabla();
    this.loading = true;
    this.empleadoService.getAllEmployees().subscribe({
      next: (res: IEmpleado): void => {
        this.employees = res.data;
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
      },
      error: (error: any): void => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      }
    });
  }

  initColumnaTabla(): void {
    this.columnasTabla = [
      { field: 'id', header: 'Id' },
      { field: 'nombre', header: 'Nombre Empleado' },
      { field: 'salario', header: 'Salario Empleado' },
      { field: 'edad', header: 'Edad' },
    ];
  }
}
