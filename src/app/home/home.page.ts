import { Component } from '@angular/core';
import { SettingsService, SettingsInterface } from '../services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public userPref: SettingsInterface = {preferedColor: 'danger'} ;

  constructor(public settings: SettingsService) {}

  async ionViewWillEnter(){
    this.userPref = await (await this.settings.getNotes());
  }

  async ngOnInit() {
    this.userPref = await (await this.settings.getNotes());
  }

}
