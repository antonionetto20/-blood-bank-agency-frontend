import { Component, OnInit } from '@angular/core'; 
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donors-per-state',
  templateUrl: './donors-per-state.component.html',
  styleUrls: ['./donors-per-state.component.css']
})
export class DonorsPerStateComponent implements OnInit {

  donorsPerState: any;
  noRecords = false;

  constructor(private donorService: DonorService) { }

  ngOnInit(): void {
    this.getDonorsPerState();
  }

  getDonorsPerState(){
    this.donorService.donorsPerState().subscribe(response => {
      if(response){
        this.donorsPerState = response; 
      }else{
        this.noRecords = true;
      }
    });
  }

}
