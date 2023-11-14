import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsComponent } from './regions.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionsComponent],
      imports:[HttpClientModule,MatToolbarModule, MatTableModule]
    });
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
