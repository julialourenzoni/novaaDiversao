import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TotallySpiesPage } from './totally-spies.page';

describe('TotallySpiesPage', () => {
  let component: TotallySpiesPage;
  let fixture: ComponentFixture<TotallySpiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotallySpiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TotallySpiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
