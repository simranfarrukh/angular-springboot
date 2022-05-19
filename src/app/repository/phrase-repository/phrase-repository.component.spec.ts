import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseRepositoryComponent } from './phrase-repository.component';

describe('PhraseRepositoryComponent', () => {
  let component: PhraseRepositoryComponent;
  let fixture: ComponentFixture<PhraseRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
