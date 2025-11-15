import { Component, OnInit } from '@angular/core';
import { Note, NoteService } from '../../services/note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  public note: Note;
  public noteContent: string = '';
  public isLoading: boolean = true;
  public errorMessage: string = '';
  private noteId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.noteId = params['id'];
      if (this.noteId) {
        this.loadNote(this.noteId);
      }
    });
  }

  loadNote(id: string) {
    this.isLoading = true;
    this.noteService.getNoteById(id).subscribe(
      (data: Note) => {
        this.note = data;
        this.noteContent = data.content;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching note:', error);
        this.errorMessage = 'Failed to load note.';
        this.isLoading = false;
      }
    )
  }

}
