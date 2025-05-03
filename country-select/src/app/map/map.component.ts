import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit{

  @ViewChild('mapSvg') pathRef!: ElementRef<SVGAElement>;

  ngAfterViewInit() {
    const paths = this.pathRef.nativeElement.querySelectorAll('path');
    paths.forEach((path, i) => {
      path.addEventListener('mouseover', () => {
        path.style.fill = 'pink';
      })
      path.addEventListener('mouseleave', () => {
        path.style.fill = 'black';
      })
    });
  }
}
