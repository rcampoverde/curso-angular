import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NgOptimizedImage } from "@angular/common";

//PrimeNG
import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PaginaTablaComponent } from './pages/pagina-tabla/pagina-tabla.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from "@angular/common/http";
import { PanelModule } from "primeng/panel";
import {TabMenuModule} from "primeng/tabmenu";
import {MenubarModule} from "primeng/menubar";
import { MenuComponent } from './components/menu/menu.component';
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoadingComponent,
    PaginaTablaComponent,
    MenuComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        HttpClientModule,
        //PrimeNG
        BrowserAnimationsModule,
        ButtonModule,
        TableModule,
        PanelModule,
        TabMenuModule,
        MenubarModule,
        ToastModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
