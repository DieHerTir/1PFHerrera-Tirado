import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { AlertServiceService } from 'src/app/services/alert-service.service';
import { CharactersService } from '../../services/characters-service.service';
import { LoaderComponent } from '../loader/loader.component';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TableCharactersComponent } from './table-characters.component';
import { MatIconModule } from '@angular/material/icon';

describe('TableCharactersComponent', () => {
  let component: TableCharactersComponent;
  let fixture: ComponentFixture<TableCharactersComponent>;
  let mockAlertService: jasmine.SpyObj<AlertServiceService>;
  let mockCharacterService: jasmine.SpyObj<CharactersService>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

 

beforeEach(() => {
  mockAlertService = jasmine.createSpyObj('AlertServiceService', ['deleteElement', 'success', 'genericSwal']);
  mockCharacterService = jasmine.createSpyObj('CharactersService', ['getCharacters', 'deleteCharacter', 'updateCharacter', 'addCharacter']);
  mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);

  TestBed.configureTestingModule({
    declarations: [TableCharactersComponent, LoaderComponent, ModalFormComponent],
    imports: [BrowserAnimationsModule,MatToolbarModule, MatIconModule],
    providers: [
      { provide: AlertServiceService, useValue: mockAlertService },
      { provide: CharactersService, useValue: mockCharacterService },
      { provide: MatDialog, useValue: mockMatDialog },
    ],
  }).compileComponents();

  fixture = TestBed.createComponent(TableCharactersComponent);
  component = fixture.componentInstance;

  
  mockCharacterService.getCharacters.and.returnValue(of( [
    {
      "id": 2,
      "nombre": "Imoen",
      "clase": "Pícaro",
      "raza": "Humano",
      "region": "Candlekeep",
      "principalStat": "Destreza"
    },
    {
      "id": 3,
      "nombre": "Viconia",
      "clase": "Clérigo",
      "raza": "Elfa Drow",
      "region": "Drow",
      "principalStat": "Sabiduría"
    },
    {
      "id": 4,
      "nombre": "Jaheira",
      "clase": "Druida",
      "raza": "Humano",
      "region": "Amn",
      "principalStat": "Sabiduría"
    },
    {
      "id": 5,
      "nombre": "Edwin",
      "clase": "Mago",
      "raza": "Humano",
      "region": "Thay",
      "principalStat": "Inteligencia"
    },
    {
      "id": 6,
      "nombre": "Khalid",
      "clase": "Guerrero",
      "raza": "Humano",
      "region": "Candlekeep",
      "principalStat": "Fuerza"
    },
    {
      "id": 7,
      "nombre": "Dynaheir",
      "clase": "Maga",
      "raza": "Humano",
      "region": "Rashemen",
      "principalStat": "Inteligencia"
    },
    {
      "id": 8,
      "nombre": "Kivan",
      "clase": "Explorador",
      "raza": "Elfo",
      "region": "Bosque de Chionthar",
      "principalStat": "Destreza"
    },
    {
      "id": 9,
      "nombre": "Alora",
      "clase": "Pícaro",
      "raza": "Gnomo",
      "region": "Ciudad de Baldur",
      "principalStat": "Carisma"
    },
    {
      "id": 10,
      "nombre": "Xan",
      "clase": "Mago",
      "raza": "Humano",
      "region": "Rashemen",
      "principalStat": "Inteligencia"
    },
    {
      "id": 11,
      "nombre": "Baeloth",
      "clase": "Hechicero",
      "raza": "Humano",
      "region": "Zakharan",
      "principalStat": "Carisma"
    },
    {
      "id": 12,
      "nombre": "Voghiln",
      "clase": "Bardo",
      "raza": "Humano",
      "region": "Calimshan",
      "principalStat": "Carisma"
    },
    {
      "id": 13,
      "nombre": "Shar-Teel",
      "clase": "Guerrero",
      "raza": "Humano",
      "region": "Ciudad de Baldur",
      "principalStat": "Fuerza"
    },
    {
      "id": 14,
      "nombre": "Safana",
      "clase": "Pícaro",
      "raza": "Humano",
      "region": "Ciudad de Baldur",
      "principalStat": "Destreza"
    },
    {
      "id": 15,
      "nombre": "Tiax",
      "clase": "Hechicero",
      "raza": "Humano",
      "region": "Thay",
      "principalStat": "Carisma"
    },
    {
      "id": 16,
      "nombre": "Coran",
      "clase": "Pícaro",
      "raza": "Elfo",
      "region": "Bosque de Chionthar",
      "principalStat": "Destreza"
    },
    {
      "id": 17,
      "nombre": "Xzar",
      "clase": "Nigromante",
      "raza": "Humano",
      "region": "Candlekeep",
      "principalStat": "Inteligencia"
    },
    {
      "id": 18,
      "nombre": "Montaron",
      "clase": "Pícaro",
      "raza": "Enano",
      "region": "Candlekeep",
      "principalStat": "Destreza"
    },
    {
      "id": 19,
      "nombre": "Dorn Il-Khan",
      "clase": "Paladín",
      "raza": "Mediano",
      "region": "Rashemen",
      "principalStat": "Fuerza"
    },
    {
      "id": 20,
      "nombre": "Branwen",
      "clase": "Clérigo",
      "raza": "Humano",
      "region": "Rashemen",
      "principalStat": "Sabiduría"
    },
    {
      "id": 21,
      "nombre": "Xzar",
      "clase": "Nigromante",
      "raza": "Humano",
      "region": "Candlekeep",
      "principalStat": "Inteligencia"
    },
    {
      "id": 22,
      "nombre": "Garrick",
      "clase": "Bardo",
      "raza": "Humano",
      "region": "Nashkel",
      "principalStat": "Carisma"
    },
    {
      "id": 23,
      "nombre": "Neera",
      "clase": "Hechicero",
      "raza": "Humano",
      "region": "Amn",
      "principalStat": "Carisma"
    },
    {
      "id": 24,
      "nombre": "Kagain",
      "clase": "Guerrero",
      "raza": "Enano",
      "region": "Ciudad de Baldur",
      "principalStat": "Fuerza"
    },
    {
      "id": 25,
      "nombre": "chatbyc",
      "raza": "Enano",
      "clase": "Clérigo",
      "region": "Baldur's Gate",
      "principalStat": "Carisma"
    }
  ]));
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
