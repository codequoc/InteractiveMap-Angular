import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
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

  //Testing method for path G
  //name = "";
 
 /* ngOnInit() {
      this.countryService.getCountry("US").subscribe((data: any) => {
          this.name = data[1][0].name;
          console.log(this.name);
      }) 
  }  */ 
  
  ngAfterViewInit() {
    const paths = this.pathRef.nativeElement.querySelectorAll('path');
    paths.forEach((path) => {
      path.addEventListener('mouseover', () => {
        path.style.fill = 'pink';
        //console.log("test:", path.id);
      })
      path.addEventListener('mouseleave', () => {
        path.style.fill = 'black';
      })
    });
  }
}
