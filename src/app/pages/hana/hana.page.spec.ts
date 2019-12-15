import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HanaPage } from './hana.page';

describe('HanaPage', () => {
  let component: HanaPage;
  let fixture: ComponentFixture<HanaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
