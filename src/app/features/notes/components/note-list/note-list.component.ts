import { Component, OnInit } from '@angular/core';
import { Note, NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  public notes: Note[] = [];
  public newNoteContent: string = '';
  public isLoading: boolean = false;
  public errorMessage: string = '';

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.isLoading = true;
    this.errorMessage = '';

    this.noteService.getNotes().subscribe(
      (data: Note[]) => {
        this.notes = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching notes:', error);
        this.errorMessage = 'Failed to load notes.';
        this.isLoading = false;
      }
    );

  }

}
