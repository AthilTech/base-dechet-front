import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {
  transform(list: any[], filters: Object) {

    const keys = Object.keys(filters).filter(key => filters[key]);
    // if (keys[0] == "startDate") {

    //   const filterObject = object => keys.every(key => this.value(object, key, filters));
    //   return keys.length ? list.filter(filterObject) : list;
    // }
    const filterObject = object => keys.every(key => this.value(object, key, filters));

    return keys.length ? list.filter(filterObject) : list;

  }

  value(object: Object, key: string, filters: Object): boolean {

    if (isNaN(object[key])) {

      return object[key].toUpperCase().indexOf(filters[key].toUpperCase()) != -1
    }

    else {
      if (object[key] != null)
        return object[key].toString().indexOf(filters[key].toString()) != -1
    }
  }

}