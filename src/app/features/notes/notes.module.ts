import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteService } from './services/note.service';
import { RouterModule } from '@angular/router';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    NoteListComponent,
    NoteDetailComponent
  ],
  providers: [
    NoteService
  ],
  exports: [
    NoteListComponent
  ]
})
export class NotesModule { }
