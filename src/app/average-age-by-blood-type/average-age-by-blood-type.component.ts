import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service'; 

@Component({
  selector: 'app-average-age-by-blood-type',
  templateUrl: './average-age-by-blood-type.component.html',
  styleUrls: ['./average-age-by-blood-type.component.css']
})
export class AverageAgeByBloodTypeComponent implements OnInit {

  averageAgeByBloodTypeList: any;
  noRecords = false;

  constructor(private donorService: DonorService) { }

  ngOnInit(): void {
    this.getAverageAgeByBloodType();
  }

  getAverageAgeByBloodType(){
    this.donorService.averageAgeByBloodType().subscribe(response => {
      if(response){
        this.averageAgeByBloodTypeList = response; 
      }else{
        this.noRecords = true;
      }
    });
  }

}
