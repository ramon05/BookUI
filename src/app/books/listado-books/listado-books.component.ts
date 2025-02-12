import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/Book';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookComponent } from '../crear-book/crear-book.component';
import { DetalleBookComponent } from '../detalle-book/detalle-book.component';

@Component({
  selector: 'app-listado-books',
  templateUrl: './listado-books.component.html',
  styleUrl: './listado-books.component.css'
})
export class ListadoBooksComponent implements OnInit {

  public books: Book[] = [];
  public book!: Book;
  displayedColumns: string[] = ['title', 'pageCount', 'publishDate', 'actions'];

  constructor(
    public bookservice: BooksService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.LeerListado();
  }

  LeerListado(){
    this.bookservice.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  // Método para abrir el modal con el componente CreateBookComponent
  openCreateBookModal(book: Book | null = null) {
    const dialogRef = this.dialog.open(CreateBookComponent, {
      width: '600px',  // Puedes ajustar el tamaño del modal
      data: { book: book }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.LeerListado();
      }
    });
  }

  openBookDetails(id: number) {
    this.dialog.open(DetalleBookComponent, {
      width: '800px', // 📌 Más ancho
      maxHeight: '90vh', // 📌 Máximo 90% de la altura de la pantalla
      panelClass: 'custom-dialog-container',
      data: { id }
    });
  }

  deleteBook(id: number) {
    if (confirm('¿Seguro que deseas eliminar este libro?')) {
      this.bookservice.deleteBook(id).subscribe(() => {
        this.books = this.books.filter(book => book.id !== id);
      });
    }
  }

}
