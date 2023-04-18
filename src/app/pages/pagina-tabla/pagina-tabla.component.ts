import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {EmpleadoService} from "../../services/empleado.service";
import {IDataEmpleado, IEmpleado} from "../../interfaces/empleado.interface";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent {
  private readonly router: Router = inject(Router);
  private readonly empleadoService: EmpleadoService = inject(EmpleadoService);

  columnasTabla: any = [];
  listMenu!: MenuItem[];
  activeItem!: MenuItem;

  employees!: IDataEmpleado[];
  backInicio(): void {
    this.router.navigate(['inicio']);
  }

  ngOnInit(): void {
    this.initColumnaTabla();
    this.initListaMenu();
    this.empleadoService.getAllEmployees().subscribe({
      next: (res: IEmpleado) => this.employees = res.data,
      error: (error: any) => console.log(error)
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

  initListaMenu(): void {
    this.listMenu = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    this.activeItem = this.listMenu[0];
  }
}
