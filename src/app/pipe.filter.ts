import { PipeTransform,Pipe } from '@angular/core';
import { TimeTable } from 'src/app/classes/time-table';

@Pipe({
name: 'filter'
})

export class TimeTableFilter implements PipeTransform{

    transform(timeTables:TimeTable[], searchText:String):TimeTable[]{
      if(!timeTables  || !searchText){
          return timeTables;
      }

      return timeTables.filter(timeTable =>
        timeTable.course.title.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1)
    }
}