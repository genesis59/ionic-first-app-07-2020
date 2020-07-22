import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AngularPage } from './angular.page';

describe('AngularPage', () => {
  let component: AngularPage;
  let fixture: ComponentFixture<AngularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AngularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
