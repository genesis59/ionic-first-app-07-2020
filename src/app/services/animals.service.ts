import { Injectable } from '@angular/core';

export interface AnimalInterface {
  title: string;
  image: string;
  desc: string;
  file: string;
  playing: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  
  private animals: AnimalInterface[] = [
    {
      title: 'Vache',
      image: '/img/animals/cow-icon.png',
      desc: 'Meugle',
      file: '/sounds/cow.mp3',
      playing: false,
    },
    {
      title: 'Dauphin',
      image: '/img/animals/dolphin-icon.png',
      desc: 'Siffle',
      file: '/sounds/dolphin.mp3',
      playing: false,
    },
    {
      title: 'Grenouille',
      image: '/img/animals/frog-icon.png',
      desc: 'Coasse',
      file: '/sounds/frog.mp3',
      playing: false,
    },
    {
      title: 'Oiseau',
      image: '/img/animals/bird-icon.png',
      desc: 'Chante',
      file: '/sounds/bird.mp3',
      playing: false,
    },
    {
      title: 'Cochon',
      image: '/img/animals/pig-icon.png',
      desc: 'Grogne',
      file: '/sounds/pig.mp3',
      playing: false,
    },
    {
      title: 'Chien',
      image: '/img/animals/puppy-icon.png',
      desc: 'Aboie',
      file: '/sounds/dog.mp3',
      playing: false,
    },
    {
      title: 'Chat',
      image: '/img/animals/black-cat-icon.png',
      desc: 'Miaule',
      file: '/sounds/cat.mp3',
      playing: false,
    },
    {
      title: 'Cheval',
      image: '/img/animals/horse-icon.png',
      desc: 'Hennit',
      file: '/sounds/horse.wav',
      playing: false,
    },
    {
      title: 'Ane',
      image: '/img/animals/donkey-icon.png',
      desc: 'Brait',
      file: '/sounds/donkey.wav',
      playing: false,
    },
  ];
  constructor() { }

private shuffle() {
  let temp;
  let randomPos;

  for (let pos in this.animals){
    // Position aléatoire
    randomPos = Math.floor(Math.random() * this.animals.length);
    // Permutation
    temp = this.animals[pos];
    this.animals[pos] = this.animals[randomPos];
    this.animals[randomPos] = temp;
  }
}

  getData() {
    this.shuffle();
    //copie du tableau en le serialisant puis en le deserialisant
    return JSON.parse(JSON.stringify(this.animals));
  }
}
