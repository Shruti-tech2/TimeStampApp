import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { parse } from 'date-fns';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time1='';
  time2='';
  timeDiff:any;

  //calculate differnce
  findDiffernce(){
  this.timeDiff = Math.abs(parse(this.time1, 'dd:MM:yyyy HH:mm:ss', new Date()).getTime() - parse(this.time2, 'dd:MM:yyyy HH:mm:ss', new Date()).getTime())/1000;
  console.log(this.timeDiff);
  }
}
