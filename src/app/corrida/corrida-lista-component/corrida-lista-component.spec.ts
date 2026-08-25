import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CorridaListaComponent } from './corrida-lista-component';

describe('CorridaListaComponent', () => {
  let component: CorridaListaComponent;
  let fixture: ComponentFixture<CorridaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridaListaComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CorridaListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});