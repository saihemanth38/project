import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dailyData = [];


 chartOptions = {
  responsive: true
 };
 graphLabels = ['1', '2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
 ngOnInit() {
  this.dail();


}
dail()
{
let total = 100;
let one = 1 / 100;
for( let i = 0; i <= 30; i++){
total = (total * one)+total;
this.dailyData.push(total);
}
}
  daily = [
    { data : this.dailyData, label: 'Daily' },
  ]

  onChartClick(event) {
    console.log(event);
   }

}

