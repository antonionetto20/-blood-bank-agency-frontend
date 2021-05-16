import { Component, OnInit} from '@angular/core';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donor-register',
  templateUrl: './donor-register.component.html',
  styleUrls: ['./donor-register.component.css']
})
export class DonorRegisterComponent implements OnInit {

  constructor(private donorService: DonorService) { }

  donors = null;
  currentInput = "";
  save = false;
  notSave = false;
  ngOnInit(): void {
  }

  inputJsonFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.donors = event.target.files[0];
      this.currentInput =  event.target.files[0].name;
  
    }
  }

  submitDonors(){
    this.donorService.registerDonor(this.donors).subscribe(
      resultado => {
        console.log(resultado);
        this.save = true;
      },
      erro => {
        if(erro.status == 400) {
          console.log(erro);
        }
        this.notSave = true
      }
    );
  }



}
