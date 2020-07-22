import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteInterface, NoteService } from 'src/app/services/note.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss'],
})
export class NoteDetailsPage implements OnInit {

  public note: NoteInterface;

  constructor(private activeRoute: ActivatedRoute, private noteService: NoteService,
    private alertCtrl: AlertController,
    private router: Router) { }

  ngOnInit() {

    const id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    this.note = this.noteService.getNoteById(id);
  }

  async deleteNote() {
    const confirm = await this.alertCtrl.create({
      header: 'Attention',
      message: 'Voulez vous vraiment supprimer cette note ?',
      buttons: [
        { text: 'NON' },
        {
          text: 'OUI',
          handler: () => {
            this.noteService.deleteNote(this.note.id);
            this.router.navigateByUrl('/note-list');
          },
        },
      ],
    });

    confirm.present();
  }

}
