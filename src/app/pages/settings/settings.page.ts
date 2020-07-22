import { Component, OnInit } from '@angular/core';
import { SettingsService, SettingsInterface } from 'src/app/services/settings.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public userPref: SettingsInterface =
  {preferedColor: 'dark'}
  ;

  constructor(public settingsservice: SettingsService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.userPref = await this.settingsservice.getNotes();
    console.log(this.userPref);
    
  }
  
}
