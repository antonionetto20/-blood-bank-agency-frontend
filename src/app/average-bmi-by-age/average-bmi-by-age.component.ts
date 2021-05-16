import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-average-bmi-by-age', 
  templateUrl: './average-bmi-by-age.component.html',
  styleUrls: ['./average-bmi-by-age.component.css']
})
export class AverageBmiByAgeComponent implements OnInit {

  bmiAveragesByAgeRange: any;
  noRecords = false;

  constructor(private donorService: DonorService) { }

  ngOnInit(): void {
    this.getBmiAveragesByAgeRange();
  }

  getBmiAveragesByAgeRange(){
    this.donorService.averageBmiByAge().subscribe(response => {
      
      if(response){
        this.bmiAveragesByAgeRange = response; 
      }else{
        this.noRecords = true;
      }
    });
  }

}
