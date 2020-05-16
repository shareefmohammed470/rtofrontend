import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import { GetVehicleDetailsComponent } from './get-vehicle-details/get-vehicle-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleinfoService } from './shared/vehicleinfo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterVehicleComponent  },
  { path: 'getvehicle', component: GetVehicleDetailsComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterVehicleComponent,
    GetVehicleDetailsComponent,
    DashboardComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [VehicleinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
