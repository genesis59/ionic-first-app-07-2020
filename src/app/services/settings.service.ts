
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const STORAGE_KEY = 'favoriteColor';

export interface SettingsInterface {
  preferedColor: string; 
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public settings: SettingsInterface = 
    {preferedColor: 'success'};


  constructor() { }

  public save () {
    Storage.set({key: STORAGE_KEY, value: JSON.stringify(this.settings)})
    console.log(this.settings);
    
  }


  public async getNotes() {
    this.settings = JSON.parse(await( await Storage.get({key: STORAGE_KEY})).value);
    if(! this.settings){
      this.settings = {preferedColor: 'dark'};
    }
    return this.settings;
  }
}






