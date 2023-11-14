import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassesComponent } from './classes.component';
import { ClassesService } from '../../services/classes.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('ClassesComponent', () => {
  let component: ClassesComponent;
  let fixture: ComponentFixture<ClassesComponent>;
  let classesServiceSpy: jasmine.SpyObj<ClassesService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ClassesService', ['getClasses']);

    TestBed.configureTestingModule({
      declarations: [ClassesComponent],
      imports:[HttpClientModule, MatToolbarModule],
      providers: [
        { provide: ClassesService, useValue: spy }
      ]
    });

    fixture = TestBed.createComponent(ClassesComponent);
    component = fixture.componentInstance;
    classesServiceSpy = TestBed.inject(ClassesService) as jasmine.SpyObj<ClassesService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load classes from the service', () => {
    const mockClasses = [{ nombre: 'Class1', tipo: 'Type1', descripcion: 'Description1' }];

    classesServiceSpy.getClasses.and.returnValue(of(mockClasses));

    component.ngOnInit();

    expect(component.classes).toEqual(mockClasses);
  });
});
