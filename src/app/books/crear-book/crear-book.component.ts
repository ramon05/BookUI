import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-book',
  templateUrl: './crear-book.component.html',
  styleUrls: ['./crear-book.component.css'],
})
export class CreateBookComponent implements OnInit {

  bookForm!: FormGroup;  // Sin el '!' ya que la inicialización está garantizada

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private dialogRef: MatDialogRef<CreateBookComponent>
  ) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      pageCount: ['', [Validators.required, Validators.min(1)]],
      publishDate: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.booksService.addBook(this.bookForm.value).subscribe(
        (response) => {
          console.log('Book added successfully:', response);
          this.dialogRef.close(this.bookForm.value);  // Cierra el modal y envía los datos
        },
        (error) => {
          console.error('Error adding book:', error);
        }
      );
    }
  }

  cancel(): void {
    this.dialogRef.close(); // Redirigir si el usuario cancela
  }
}
