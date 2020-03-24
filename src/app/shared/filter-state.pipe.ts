import { Pipe, PipeTransform } from '@angular/core';
import { Brewery } from './brewery';

@Pipe({
  name: 'filterState'
})
export class FilterStatePipe implements PipeTransform {

  transform(data: Brewery[], selectedState: string): Brewery[] {
    if ((selectedState && selectedState !== "undefined") && (data && data.length > 0)) {
      return data.filter(home => (home.state === selectedState));
    } else {
      return data
    }
  }
}

