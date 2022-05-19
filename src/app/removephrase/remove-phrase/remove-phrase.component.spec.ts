import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePhraseComponent } from './remove-phrase.component';

describe('RemovePhraseComponent', () => {
  let component: RemovePhraseComponent;
  let fixture: ComponentFixture<RemovePhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePhraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
