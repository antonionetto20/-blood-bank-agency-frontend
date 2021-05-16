import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DonorRegisterComponent } from './donor-register/donor-register.component';
import { HttpClientModule } from '@angular/common/http';
import { DonorsPerStateComponent } from './donors-per-state/donors-per-state.component';
import { AverageBmiByAgeComponent } from './average-bmi-by-age/average-bmi-by-age.component';
import { PercentageObesityByGenderComponent } from './percentage-obesity-by-gender/percentage-obesity-by-gender.component';
import { AverageAgeByBloodTypeComponent } from './average-age-by-blood-type/average-age-by-blood-type.component';
import { AmountDonorsByBloodTypeComponent } from './amount-donors-by-blood-type/amount-donors-by-blood-type.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    DonorRegisterComponent,
    DonorsPerStateComponent,
    AverageBmiByAgeComponent,
    PercentageObesityByGenderComponent,
    AverageAgeByBloodTypeComponent,
    AmountDonorsByBloodTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
