import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloodShotPage } from './blood-shot.page';

describe('BloodShotPage', () => {
  let component: BloodShotPage;
  let fixture: ComponentFixture<BloodShotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodShotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloodShotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
