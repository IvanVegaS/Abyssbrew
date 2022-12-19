import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

@Pipe({
  name: 'uniqueType',
  pure: false
})

export class UniqueTypePipe implements PipeTransform {
    transform(value: any): any{
        if(value!== undefined && value!== null){
            return _.uniqBy(value, 'type');
        }
        return value;
    }
}