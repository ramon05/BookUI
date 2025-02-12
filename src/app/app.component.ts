import { Component } from '@angular/core';
import { ListadoBooksComponent } from "./books/listado-books/listado-books.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookUI';
}
