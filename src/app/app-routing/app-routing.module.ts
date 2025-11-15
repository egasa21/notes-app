import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from 'app/features/notes/components/note-list/note-list.component';
import { NoteDetailComponent } from 'app/features/notes/components/note-detail/note-detail.component';


const routes: Routes = [
  {
    path: 'notes',
    component: NoteListComponent
  },
  {
    path: 'notes/:id',
    component: NoteDetailComponent
  },
  {
    path: '', // Default route
    redirectTo: '/notes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
