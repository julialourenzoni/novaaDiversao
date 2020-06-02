import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElitePage } from './elite.page';

describe('ElitePage', () => {
  let component: ElitePage;
  let fixture: ComponentFixture<ElitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
