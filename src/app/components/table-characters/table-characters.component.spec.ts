import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCharactersComponent } from './table-characters.component';

describe('TableCharactersComponent', () => {
  let component: TableCharactersComponent;
  let fixture: ComponentFixture<TableCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCharactersComponent]
    });
    fixture = TestBed.createComponent(TableCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
