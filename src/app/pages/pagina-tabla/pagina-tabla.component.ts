import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmpleadoService} from "../../services/empleado.service";
import {IDataEmpleado, IEmpleado} from "../../interfaces/empleado.interface";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css'],
  providers: [MessageService]
})
export class PaginaTablaComponent implements OnInit{
  private readonly router: Router = inject(Router);
  private readonly empleadoService: EmpleadoService = inject(EmpleadoService);
  private readonly messageService: MessageService = inject(MessageService);

  columnasTabla: any = [];
  loading: boolean = false;

  employees!: IDataEmpleado[];
  backInicio(): void {
    this.router.navigate(['inicio']).then();
  }

  ngOnInit(): void {
    this.initColumnaTabla();
    this.loading = true;
    this.empleadoService.getAllEmployees().subscribe({
      next: (res: IEmpleado) => {
        this.employees = res.data;
        this.loading = false;
      },
      error: (error: any) => {
        console.log(error);
        this.loading = false;
      }
    });
  }

  initColumnaTabla(): void {
    this.columnasTabla = [
      { field: 'id', header: 'Id' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'salario', header: 'Salario' },
      { field: 'edad', header: 'Edad' },
    ];
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

}
