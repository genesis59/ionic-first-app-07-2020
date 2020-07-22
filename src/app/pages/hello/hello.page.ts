import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
})
export class HelloPage implements OnInit {

  public name: string = "";

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.activeRoute.snapshot.paramMap.get('name');
  }

}
