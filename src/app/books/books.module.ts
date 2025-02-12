import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../materials/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListadoBooksComponent } from './listado-books/listado-books.component';
import { CreateBookComponent } from './crear-book/crear-book.component';
import { DetalleBookComponent } from './detalle-book/detalle-book.component';



@NgModule({
  declarations: [ListadoBooksComponent, CreateBookComponent, DetalleBookComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [ListadoBooksComponent]
})
export class BooksModule { }
