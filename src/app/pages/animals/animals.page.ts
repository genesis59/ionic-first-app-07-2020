import { Component, OnInit } from '@angular/core';
import { AnimalsService, AnimalInterface } from 'src/app/services/animals.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],

})
export class AnimalsPage implements OnInit {

  public started: boolean = false;
  private currentAnimalIndex: number = null;
  private media: HTMLAudioElement = null;
  public try: number = 0;
  public reorderDisabled = true;
  public cheatMode = false;
  public animalList: AnimalInterface[];

  constructor(
    public animalService: AnimalsService,
    private toast: ToastController
  ) { }

  Play() {
    this.started = true;
    // arrêt du son avant d en jouer un autre
    if (this.media && !this.media.ended) {
      this.media.pause();
    }
    if (this.currentAnimalIndex === null) {
      // Sélection d un animal au hasard si aucun animal n as ete select 
      // ou si on as gagné
      this.currentAnimalIndex = Math.floor(
        Math.random() * this.animalList.length
      );
    }
    // recuperation de l animal selectionné
    const animal = this.animalList[this.currentAnimalIndex];
    // Lecture du son
    this.media = new Audio('/assets' + animal.file);
    this.media.load();
    this.media.play();
    animal.playing = true;
    // Masquage de la note de musique a la fin du son
    this.media.ontimeupdate = () => {
      if (this.media.ended) {
        animal.playing = false;
      }
    }
  }

  ngOnInit() {
    this.animalList = this.animalService.getData();
  }

  guess(index) {
    let message = "";
    let success = false;
    if (this.currentAnimalIndex === index) {
      if (this.try == 0) {
        message = `Bravo tu as gagné du premier coup ${this.cheatMode ? 'tricheur' : ''}`;
        success = true;
        // Arrêt du son
        this.media.pause();
      } else {
        message = `Bravo tu as gagné en ${this.try + 1} essai(s) ${this.cheatMode ? 'mais tu as quand même triché' : ''}`;
        success = true;
        // Arrêt du son
        this.media.pause();
      }
      this.try = 0;
    } else {
      message = "Essaie encore";
      // Stocker le nom de l animal a trouver
      const animalName = this.animalList[this.currentAnimalIndex].title;
      // Suppression d un animal dans la tableau
      this.animalList.splice(index, 1);
      this.currentAnimalIndex = this.animalList.findIndex((item) => {
        return item.title === animalName;
      });
      this.try += 1;
    }
    this.showResult(message, success);
  }

  private reset() {
    // Rejouer une partie
    this.started = false;
    this.currentAnimalIndex = null;
    this.cheatMode = false;
    this.reorderDisabled = true;
    this.animalList = this.animalService.getData();
  }

  async showResult(message, success) {
    const myToast = await this.toast.create({
      message,
      duration: 1500,
      position: 'middle'
    });

    myToast.present();
    if (success) {
      myToast.onDidDismiss().then(() => this.reset());
    }

  }
  reorderAnimal(event) {
    event.detail.complete();
  }

}
