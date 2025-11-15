import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/services/api.service';
import { Observable } from 'rxjs';


export interface Note {
  id: string;
  content: string;
  createdAt: Date;
}

export interface NoteCreateRequest {
  content: string;
}

@Injectable()
export class NoteService {

  private path = '/notes';

  constructor(private apiService: ApiService) { }

  getNotes() {
    return this.apiService.get(this.path);
  }

  createNote(note: NoteCreateRequest): Observable<Note> {
    return this.apiService.post(this.path, note);
  }

  deleteNote(id: string): Observable<any> {
    return this.apiService.delete(`${this.path}/${id}`);
  }
}