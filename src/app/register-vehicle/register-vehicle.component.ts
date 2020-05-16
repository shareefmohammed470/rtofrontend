import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleinfoService } from '../shared/vehicleinfo.service';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.scss']
})
export class RegisterVehicleComponent implements OnInit {
  //  violenceCommited: any;
  filterPSRange : PSRange[];

   voilemceCommited : ViolenceCommited[] = [
    {Name: '---Select---',Value : 0},
     {
       Name : 'No Parking' , Value : 1
     },
     {
      Name : 'Over Speed' , Value : 2
    },
    {
      Name : 'Triple Riding' , Value : 3
    },
    {
      Name : 'Drunk and Drive' , Value : 4
    }
   ]

   commisionarate : Commissionarate[] = [
     {Name: '---Select---',Value : 0},
     {Name : 'Cyberabad' , Value: 1},
     {Name : 'Hyderabad' , Value: 2},
     {Name : 'Secundrabad' , Value: 3},
     {Name : 'Vijayawada' , Value: 4},
     {Name : 'Guntur' , Value: 5}

  ]
  
  PSRange : PSRange[] = [
    {Name: '---Select---',Value : 0},
    {Name:'Madhapur' , Value : 1},
    {Name:'JNTU' , Value : 1},
    {Name:'Kukatpally' , Value : 1},
    {Name:'Gachibowli' , Value : 1},
    {Name:'Tank Bund' , Value : 2},
    {Name:'Charminar' , Value : 2},
    {Name:'Golconda' , Value : 2},
    {Name:'Ameerpet' , Value : 2},
    {Name:'Y Junction' , Value : 3},
    {Name:'Nagole' , Value : 3},
    {Name:'Begumpet' , Value : 3},
    {Name:'RasoolPura' , Value : 3},
    {Name:'Bhavanipuram' , Value : 4},
    {Name:'Machavaram' , Value : 4},
    {Name:'Patamata' , Value : 4},
    {Name:'AutoNagar' , Value : 4},
    {Name:'Brodipet' , Value : 5},
    {Name:'Krosuru' , Value : 5},
    {Name:'Pattibipuram' , Value : 5},
    {Name:'Koritipadu' , Value : 5},
  ]

  isDriverMajor : any[] = [
    {Name: '---Select---',Value : 0},
    {
      Name : 'Yes' , Value : 1,
     
    },
    {
      Name : 'No' , Value : 2
    }
  ]
  obj: any;
   
  constructor(private _VehicleinfoService : VehicleinfoService) { }

  ngOnInit() {
  }

  public form = {
    Value : null
  };

  RegistrationForm = new FormGroup({
    RegistrationNum: new FormControl('', Validators.required),
    OwnerName: new FormControl('', Validators.required),
    violenceCommited: new FormControl('', Validators.required),
    Commissionarate: new FormControl('', Validators.required),
    PSRange: new FormControl('', Validators.required),
    DriverName: new FormControl('', Validators.required),
    isDriverMajor: new FormControl('', Validators.required),
    LisenseNum: new FormControl('', Validators.required),
    FineAmount: new FormControl('', Validators.required),
    Date: new FormControl('', Validators.required),
    //Image: new FormControl('', Validators.required)
  })

  Saveobj(){
    this.obj = {
      Registration_num : this.RegistrationForm.controls['RegistrationNum'].value,
      owner_name : this.RegistrationForm.controls['OwnerName'].value,
      violencecommmited : this.RegistrationForm.controls['violenceCommited'].value,
      commissionerate : this.RegistrationForm.controls['Commissionarate'].value,
      PSRange: this.RegistrationForm.controls['PSRange'].value,
      DriverName: this.RegistrationForm.controls['DriverName'].value,
      isDriverMajor: this.RegistrationForm.controls['isDriverMajor'].value,
      LicenseNum: this.RegistrationForm.controls['LisenseNum'].value,
      FinetobeCollected: this.RegistrationForm.controls['FineAmount'].value,
      violencecommiteddate: this.RegistrationForm.controls['Date'].value
    }
    this._VehicleinfoService.RegisterVehicle(this.obj).subscribe(data=>{
      console.log(data);
      alert('comp')
    })
 
  }
  filterPS(event){
    this.filterPSRange = this.PSRange.filter(a=>a.Value == this.form.Value );
    console.log(this.filterPSRange);
  }
 
}

class ViolenceCommited{
  Name : string;
  Value : Number;
}

class Commissionarate {
  Name : string;
  Value : Number;
}

class PSRange {
  Name : string;
  Value : Number
}


 