import {  Component, OnInit } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
import { DishService } from 'src/app/dish.service';


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})

export class BarGraphComponent implements OnInit  {
  chartSeries: ApexNonAxisChartSeries = [50,50];

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };
  chartLabels = ["Menu1", "Menu2"];
  chartTitle: ApexTitleSubtitle = {
    text: 'Recomanded Menu',
    align: 'center'
  };
  chartDataLabels: ApexDataLabels = {
    enabled: true
  };


  constructor(private dishService:DishService) { }
  

  ngOnInit(): void {
    this.fetchChartData();
   
  }

  fetchChartData(): void {
    this.dishService.getMenu1().subscribe((countMenu1:number) => {
      this.dishService.getMenu2().subscribe((countMenu2:number) => {
        this.chartSeries = [countMenu1, countMenu2] ;
      });
    });
  }

  

   
  
 

  }
