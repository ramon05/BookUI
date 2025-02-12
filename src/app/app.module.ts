import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { MaterialModule } from './materials/material.module';

import { AppComponent } from './app.component';  // Tu componente principal
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent
     // Declara tus componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Asegúrate de importar HttpClientModule
    MaterialModule,
    BooksModule,
    ReactiveFormsModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]  // El componente principal que arranca la aplicación
})
export class AppModule { }
