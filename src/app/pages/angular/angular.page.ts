import { Component, OnInit } from '@angular/core';

export interface PersonInterface {
  name: string;
  firstName: string;
  job: string;
  age?: number;
}

@Component({
  selector: 'app-angular',
  templateUrl: './angular.page.html',
  styleUrls: ['./angular.page.scss'],
})
export class AngularPage implements OnInit {

  public name = 'Albert';
  public celsius: number = 0;
  public farenheit: number = 0;
  public favoriteColor = 'danger';
  public names: string[] = ['Pauline', 'Sophie', 'Armance'];
  public showCalc: boolean = false;
  public formulaire: string = 'Ouvrir le formulaire';
  public person: PersonInterface = {
    firstName: 'Ada',
    name: 'Lovelace',
    job: 'Mathématicienne',
    age: 33
  }

  constructor() { }

  doClick() {
    console.log("click")
  }
  CelsiuToFarenheit() {
    const ratio: number = 9 / 5;
    this.farenheit = (this.celsius * ratio) + 32
  }
  showHideForm() {
    this.showCalc = !this.showCalc;
    if (this.showCalc) {
      this.formulaire = 'Fermer le formulaire';
    } else {
      this.formulaire = 'Ouvrir le formulaire';
    }
  }

  addName() {
    this.names.push(this.name);
  }
  deleteName(pos) {
    this.names.splice(pos, 1);
  }
  ngOnInit() {
  }

}
