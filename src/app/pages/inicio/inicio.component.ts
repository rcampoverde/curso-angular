import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{
  private readonly messageService: MessageService = inject(MessageService);

  nombre: string = 'Rubén';
  apellido: string = 'Campoverde';
  loadingVisible: boolean = false;
  formUsuario!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formUsuario = new FormGroup<any>({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
    });
  }

  verificar(): void{
    if (this.formUsuario.valid){
      this.messageService.add({ severity: 'success', summary: 'Formulario Correcto', detail: 'Exito' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor llene los campos requeridos' });
    }
  }
}
