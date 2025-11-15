import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteService } from './services/note.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NoteListComponent
  ],
  providers: [
    NoteService
  ],
  exports: [
    NoteListComponent
  ]
})
export class NotesModule { }
