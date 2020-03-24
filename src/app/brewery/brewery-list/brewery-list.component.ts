import { Component, Input } from '@angular/core';
import { Brewery } from 'src/app/shared/brewery';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss']
})
export class BreweryListComponent {
  @Input() breweryList: Brewery[];

}
