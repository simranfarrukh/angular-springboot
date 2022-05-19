import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPhraseComponent } from './modify-phrase.component';

describe('ModifyPhraseComponent', () => {
  let component: ModifyPhraseComponent;
  let fixture: ComponentFixture<ModifyPhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPhraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
