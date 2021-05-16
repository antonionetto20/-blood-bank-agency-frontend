import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorRegisterComponent } from './donor-register/donor-register.component';
import { DonorsPerStateComponent } from './donors-per-state/donors-per-state.component';
import { AverageBmiByAgeComponent } from './average-bmi-by-age/average-bmi-by-age.component';
import { PercentageObesityByGenderComponent } from './percentage-obesity-by-gender/percentage-obesity-by-gender.component';
import { AverageAgeByBloodTypeComponent } from './average-age-by-blood-type/average-age-by-blood-type.component';
import { AmountDonorsByBloodTypeComponent } from './amount-donors-by-blood-type/amount-donors-by-blood-type.component';

const routes: Routes = [
  {path: "donor-register", component: DonorRegisterComponent},
  {path: "donors-per-state", component: DonorsPerStateComponent},
  {path: "average-bmi-by-age", component: AverageBmiByAgeComponent},
  {path: "percentage-obesity-by-gender", component: PercentageObesityByGenderComponent},
  {path: "average-age-by-blood-type", component: AverageAgeByBloodTypeComponent},
  {path: "amount-donors-by-blood-type", component: AmountDonorsByBloodTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
