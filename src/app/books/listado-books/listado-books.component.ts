import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-listado-books',
  templateUrl: './listado-books.component.html',
  styleUrl: './listado-books.component.css'
})
export class ListadoBooksComponent implements OnInit {

  public books!: Book[];
  displayedColumns: string[] = ['title', 'pageCount', 'publishDate', 'actions'];

  constructor(public bookservice: BooksService ) {}

  ngOnInit(): void {
    this.LeerListado();
  }

  LeerListado(){
    this.bookservice.getBooks().subscribe((data) => {
      this.books = data;
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
