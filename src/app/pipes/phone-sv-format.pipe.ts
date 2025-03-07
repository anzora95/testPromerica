import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneSvFormat'
})
export class PhoneSvFormatPipe implements PipeTransform {

  transform(value: string | number): string {
    if (!value) return '';
    let phoneNumber = value.toString().replace(/\D/g, '');

    if (phoneNumber.length === 8) {
      return `(+503) ${phoneNumber.substring(0, 4)}-${phoneNumber.substring(4)}`;
    }
    return value.toString();
  }

}
