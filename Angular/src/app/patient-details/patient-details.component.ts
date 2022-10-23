import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Corona } from '../models/Corona';
import { Vaccination } from '../models/Vaccination';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  constructor(public ser:PatientServiceService,public rout:Router) { }
  patientDetail1=this.ser.patientDetail2;
  coronaDetail1:Corona=new Corona(1,new Date("10/5/2020"),new Date("13/2/2021"));
  vaccitionDetail:Vaccination[]=[new Vaccination(1,new Date("13/6/2021"),"moderna")];
 
 p:Date=new Date();
  Detail:any;
  ngOnInit(): void {
    
  var f:Date=new Date();
    this.ser.patientDetail(this.patientDetail1).subscribe(succ=>this.patientDetail1=succ);
    this.ser.MyCorona(this.patientDetail1).subscribe(succ=>{this.coronaDetail1=succ;console.log(succ);console.log(this.coronaDetail1)});
    this.ser.MyVaccition(this.patientDetail1).subscribe(succ=>{this.vaccitionDetail=succ;console.log(succ)});
console.log(this.coronaDetail1+"MyCorona");
// this.coronaDetail1.BecameIll=p;
// this.coronaDetail1.Recovery=f;
   
  }
back(){
  this.rout.navigate(['allPatients']);

}
}
