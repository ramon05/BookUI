import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-crear-book',
  templateUrl: './crear-book.component.html',
  styleUrls: ['./crear-book.component.css'],
})
export class CreateBookComponent implements OnInit {

  bookForm!: FormGroup;  // Sin el '!' ya que la inicialización está garantizada
  bookToEdit: Book | null = null;
  Titulo = "Add New Book"

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private dialogRef: MatDialogRef<CreateBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { book: Book | null }
  ) { }

  ngOnInit(): void {
    this.bookToEdit = this.data.book;

    if(this.bookToEdit?.title.length){
      this.Titulo = "Edit Book";
    }

    this.bookForm = this.fb.group({
      title: [this.bookToEdit?.title || '', Validators.required],
      description: [this.bookToEdit?.description || '', Validators.required],
      pageCount: [this.bookToEdit?.pageCount || '', [Validators.required, Validators.min(1)]],
      publishDate: [this.bookToEdit?.publishDate || '', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const bookData = this.bookForm.value;
      if (this.bookToEdit && this.bookToEdit.id !== undefined) {
        // Si existe un libro para editar, actualizamos el libro
        this.booksService.updateBook(this.bookToEdit.id, bookData).subscribe(
          (response) => {
            console.log('Book updated successfully:', response);
            this.dialogRef.close(response); // Cerramos el modal y pasamos el libro actualizado
          },
          (error) => {
            console.error('Error updating book:', error);
          }
        );
      } else {
        // Si no hay un libro para editar, lo creamos
        this.booksService.addBook(bookData).subscribe(
          (response) => {
            console.log('Book added successfully:', response);
            this.dialogRef.close(response); // Cerramos el modal y pasamos el libro creado
          },
          (error) => {
            console.error('Error adding book:', error);
          }
        );
      }
    }
  }

  cancel(): void {
    this.dialogRef.close(); // Redirigir si el usuario cancela
  }
}
