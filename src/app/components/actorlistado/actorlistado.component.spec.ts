import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorlistadoComponent } from './actorlistado.component';

describe('ActorlistadoComponent', () => {
  let component: ActorlistadoComponent;
  let fixture: ComponentFixture<ActorlistadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActorlistadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActorlistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
