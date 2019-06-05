import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addImage'
})
export class AddImagePipe implements PipeTransform {
  urlImage = 'http://image.tmdb.org/t/p/w300/';

  transform(value: string): string {
    return this.urlImage + value;
  }

}
