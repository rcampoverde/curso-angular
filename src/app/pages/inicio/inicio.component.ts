import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {IDataEmpleadoPost, IEmpleadoPost} from "../../interfaces/empleado.interface";
import {EmpleadoService} from "../../services/empleado.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{
  private readonly messageService: MessageService = inject(MessageService);
  private readonly empleadoService: EmpleadoService = inject(EmpleadoService);

  nombre: string = 'Rubén';
  apellido: string = 'Campoverde';
  loadingVisible: boolean = false;
  formEmpleado!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formEmpleado = new FormGroup<any>({
      name: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    });
  }

  guardar(): void{
    if (this.formEmpleado?.valid){
      let body: IDataEmpleadoPost = this.formEmpleado.value
      this.empleadoService.postEmployee(body).subscribe((res: IEmpleadoPost): void => {
        if(res.status === 'success') {
          this.messageService.add({severity: 'success', summary: 'Grabación correcta', detail: res.data.name + ' grabado correctamente'});
          this.formEmpleado.reset();
        }
        else
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Hubo un error al grabar el registro' });
      });
    } else
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor llene los campos requeridos' });
  }
}
