import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component'
import { PipesModule } from '../pipes/pipes.module';
import { ContactosComponent } from './contactos/contactos.component';



@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    ContactosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    NgbRatingModule
  
  ]
})
export class PagesModule { }
