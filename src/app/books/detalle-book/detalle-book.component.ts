import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-detalle-book',
  templateUrl: './detalle-book.component.html',
  styleUrl: './detalle-book.component.css'
})
export class DetalleBookComponent implements OnInit {
  book!: Book;

  constructor(
    private bookService: BooksService,
    private dialogRef: MatDialogRef<DetalleBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number } // Recibe el ID del libro
  ) {}

  ngOnInit(): void {
    this.BookGetById(this.data.id);
  }

  BookGetById(id: number) {
    this.bookService.getBookById(id).subscribe((data) => {
      this.book = data;
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
