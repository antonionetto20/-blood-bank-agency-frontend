import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-percentage-obesity-by-gender',
  templateUrl: './percentage-obesity-by-gender.component.html',
  styleUrls: ['./percentage-obesity-by-gender.component.css']
})
export class PercentageObesityByGenderComponent implements OnInit {

  percentageObesityByGender: any;
  femalePercentage = "";
  malePercentage = "";
  noRecords = false;

  constructor(private donorService: DonorService) { }

  ngOnInit(): void {
    this.getPercentageObesityByGender();
  }

  getPercentageObesityByGender(){

    this.donorService.percentageObesityByGender().subscribe(response => {
      
      if(response){
        this.percentageObesityByGender = response; 
        this.femalePercentage = this.percentageObesityByGender[0].femalePercentage;
        this.malePercentage = this.percentageObesityByGender[0].malePercentage;
      }else{
        this.noRecords = true;
      }
    });
  }

}