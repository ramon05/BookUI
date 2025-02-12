import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [
        MatTableModule,
        MatButtonModule,
        CommonModule, 
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule,
        MatToolbarModule,
        CommonModule
    ],
    exports: [
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule,
        MatToolbarModule,
        CommonModule
    ]
  })
  export class MaterialModule { }