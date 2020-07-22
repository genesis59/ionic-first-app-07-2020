import { Component, OnInit } from '@angular/core';
import { NoteInterface, NoteService } from '../../../services/note.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.page.html',
  styleUrls: ['./note-form.page.scss'],
})
export class NoteFormPage implements OnInit {

  public note: NoteInterface = {
    id: null,
    title: '',
    text: '',
    color: 'primary'
  }

  constructor(private noteService: NoteService,private router: Router,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.note = this.noteService.getNoteById(id);
    }
  }

  validate() {
    this.noteService.save(this.note);
    this.router.navigateByUrl('/note-list');
  }

}
