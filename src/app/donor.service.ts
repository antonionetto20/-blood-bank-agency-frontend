import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private urlBase = "http://localhost:8080/donors";

  constructor(private http: HttpClient) { }

  registerDonor(donors: any) {

    let formData: FormData = new FormData();
    formData.append("file", donors);
    let jsonFile = JSON.stringify(document);

    formData.append("jsonFile",new Blob([JSON.stringify({
      "jsonFile": jsonFile})], {
      type: "application/json"
      })
    );

    return this.http.post(this.urlBase + "/addDonors", formData);
  }

  donorsPerState(){
    return this.http.get(this.urlBase + "/getAmountDonorsPerState")
  }

  averageBmiByAge(){
    return this.http.get(this.urlBase + "/getAverageBmiByAgRange")
  }

  percentageObesityByGender(){
    return this.http.get(this.urlBase + "/getPercentageOfObeseIndividualsByGender")
  }

  averageAgeByBloodType(){
    return this.http.get(this.urlBase + "/getAverageAgeByBloodType")
  }

  amountDonorsByBloodType(){
    return this.http.get(this.urlBase + "/getAmountDonorsByBloodType")
  }
}
