import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'momentDate'
})
export class MomentDatePipe implements PipeTransform {

  transform(value: any, pattern: string = 'dd/MM/yyyyy HH:mm:ss'): any {
    moment.locale('pt-BR');
    if (!value) {
      return '';
    }
    if (pattern === 'fromNow') {
      return moment(value).fromNow();
    }
    return moment(value).format(pattern);
  }
}
