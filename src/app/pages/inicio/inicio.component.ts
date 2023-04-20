import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{
  nombre: string = 'Rubén';
  apellido: string = 'Campoverde';
  loadingVisible: boolean = false;
  formUsuario!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formUsuario = new FormGroup<any>({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
    });
  }
}
