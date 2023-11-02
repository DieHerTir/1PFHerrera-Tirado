import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RegionService } from '../../services/region.service';
export interface regionsFic{
  nombre: string,
  clima:string,
  plano:string
  ubicacion:string}
@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent {
  displayedColumns: string[] = ['nombre', 'clima', 'plano', 'ubicacion'];
  regions$!:Observable<regionsFic[]>
  regions!: regionsFic[]
  loader:boolean =false
  constructor(regionService:RegionService){
      this.regions$  = regionService.getRegions()
      this.regions$.subscribe(data=>{
        this.regions = data
      })
  }
}
