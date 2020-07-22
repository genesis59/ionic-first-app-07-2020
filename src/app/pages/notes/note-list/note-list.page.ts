import { Component, OnInit } from '@angular/core';
import { NoteInterface, NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.page.html',
  styleUrls: ['./note-list.page.scss'],
})
export class NoteListPage implements OnInit {

  public noteList: NoteInterface[] = [];


  constructor(public noteService: NoteService) { }

  async ngOnInit() {
    this.noteList = await this.noteService.getNotes();
  }



}
