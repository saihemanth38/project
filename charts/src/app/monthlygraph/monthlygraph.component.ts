import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthlygraph',
  templateUrl: './monthlygraph.component.html',
  styleUrls: ['./monthlygraph.component.scss']
})
export class MonthlygraphComponent implements OnInit {

 Monthlyvalues= [];
 MonthlyList=['1st month','2nd month','3rd month','4th month','5th month','6th month','7th month','8th month','9th month','10th month','11th month','12th month'];

 chartOptions = {
  responsive: true
 };
  ngOnInit() {
    this.monthData();
  }
  monthData()
  {

    var value= 100;
    var formula = 1/100;
    for(var i=0;i<=365; i++)
    {
      if(i%30==0 && i!=0)
      {

          value = (value * formula)+value ;
          this.Monthlyvalues.push(value);

      }

    }
  }
    monthlydata = [
      { data : this.Monthlyvalues, label: 'MonthlyList' },
    ];

    onChartClick(event) {
      console.log(event);
     }

    }


