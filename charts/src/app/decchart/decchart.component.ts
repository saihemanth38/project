import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decchart',
  templateUrl: './decchart.component.html',
  styleUrls: ['./decchart.component.scss']
})
export class DecchartComponent implements OnInit {

  Days=[];
  DaysList =['1','2','3','4','5','6','7','8','9','10','11','12','13','14',
  '15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
  chartOptions={
    responsive : true
  };

  ngOnInit() {
    this.decrease();
  }
  decrease()
  {
    var value = 100;
    var formula = 1 / 100;
    for(var i=30; i>=0; i--)
    {
      value =value-(value*formula);
      this.Days.push(value);
    }

  }
  daily = [
    { data : this.Days, label: 'DaysList' },
  ]

  onChartClick(event) {
    console.log(event);
   }
  }


