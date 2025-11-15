import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule, BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NotesModule } from './features/notes/notes.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    NotesModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
