import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decreasemonthly',
  templateUrl: './decreasemonthly.component.html',
  styleUrls: ['./decreasemonthly.component.scss']
})
export class DecreasemonthlyComponent implements OnInit {

  Dec = [];
  DataLabels = ['1st month','2nd month','3rd mnth','4th month','5th month','6th month',
'7th month','8th month','9th month','10th month','11th month','12th month'];
chartOptions = {
  responsive: true
 };

  ngOnInit() {
    this.decMonthly();
  }
decMonthly()
{
  var value=100;
  var formula = 1 / 100;
  for(var i=365; i>=0; i--)
  {
    if(i%30==0 && i!=0)
    {
      value = value-(value*formula);
      this.Dec.push(value);
    }
  }
}
monthlydata = [
  { data : this.Dec, label: 'DataLables' },
]

onChartClick(event) {
  console.log(event);
 }

}
