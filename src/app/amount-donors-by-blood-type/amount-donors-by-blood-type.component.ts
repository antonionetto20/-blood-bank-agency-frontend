import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-amount-donors-by-blood-type',
  templateUrl: './amount-donors-by-blood-type.component.html',
  styleUrls: ['./amount-donors-by-blood-type.component.css']
})
export class AmountDonorsByBloodTypeComponent implements OnInit {

  amountDonorsByBloodTypeList: any;
  noRecords = false;

  constructor(private donorService: DonorService) { }

  ngOnInit(): void {
    this.getAmountDonorsByBloodType();
  }

  getAmountDonorsByBloodType(){
    this.donorService.amountDonorsByBloodType().subscribe(response => {
      if(response){
        this.amountDonorsByBloodTypeList = response; 
      }else{
        this.noRecords = true;
      }
    });
  }

}
