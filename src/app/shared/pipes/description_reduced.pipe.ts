import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'descriptionReduced'
})
export class DescriptionReduced implements PipeTransform {

  transform(txt: string, finish: number, start: number): string {
    if (txt.length > finish) {
      return txt.substr(start, finish) + '...';
    }
    return txt;
  }
}
