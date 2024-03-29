import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedUserComponent } from './matched-user.component';

describe('MatchedUserComponent', () => {
  let component: MatchedUserComponent;
  let fixture: ComponentFixture<MatchedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchedUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
