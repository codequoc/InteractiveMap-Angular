import { AfterViewInit, Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit{

  constructor(private countryService: CountryService) {}

  @ViewChild('mapSvg') pathRef!: ElementRef<SVGAElement>;
  @Output() nameEvent = new EventEmitter<string>();
  @Output() captialEvent = new EventEmitter<string>();
  @Output() regionEvent = new EventEmitter<string>();
  @Output() incomeEvent = new EventEmitter<string>();
  @Output() isoEvent = new EventEmitter<string>();
  @Output() idEvent = new EventEmitter<string>();
  
  ngAfterViewInit() {
    const paths = this.pathRef.nativeElement.querySelectorAll('path');
    paths.forEach((path) => {
      path.addEventListener('mouseover', () => {
        path.style.fill = 'pink';
        this.countryService.getCountry(path.id).subscribe((data: any) => {
            const nameCountry = data[1][0].name;
            const captialCountry = data[1][0].capitalCity;
            const regionCountry = data[1][0].region.value;
            const incomeCountry = data[1][0].incomeLevel.value;
            const isoCountry = data[1][0].iso2Code;
            const idCountry = data[1][0].id

            this.nameEvent.emit(nameCountry);
            this.captialEvent.emit(captialCountry);
            this.regionEvent.emit(regionCountry);
            this.incomeEvent.emit(incomeCountry);
            this.isoEvent.emit(isoCountry);
            this.idEvent.emit(idCountry);
        })
      })
      path.addEventListener('mouseleave', () => {
        path.style.fill = 'black';
      })
    });
  }
}
