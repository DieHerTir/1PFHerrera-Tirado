import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalFormComponent } from './modal-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

class MatDialogRefMock {
  close() {}
}
describe('ModalFormComponent', () => {
  let component: ModalFormComponent;
  let fixture: ComponentFixture<ModalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFormComponent],
      imports:[MatDialogModule, MatToolbarModule,MatCardModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule,MatSelectModule, ReactiveFormsModule],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(ModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
