import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppComponent } from './app.component';  // Tu componente principal
import { ListadoBooksComponent } from './books/listado-books/listado-books.component';  // Ejemplo de otro componente
import { MaterialModule } from './materials/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ListadoBooksComponent // Declara tus componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Asegúrate de importar HttpClientModule
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // El componente principal que arranca la aplicación
})
export class AppModule { }
