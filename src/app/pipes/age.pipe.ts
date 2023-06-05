import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: number): unknown {
    let currentyear:any = new Date().getFullYear();
    let StudentBirthday:any = new Date(value).getFullYear();
    let StudentAge =currentyear-StudentBirthday;

    
    return  StudentAge;
  }

}
