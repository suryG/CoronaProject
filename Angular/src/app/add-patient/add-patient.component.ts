import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Corona } from '../models/Corona';
import { patient } from '../models/patient';
import { Vaccination } from '../models/Vaccination';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(public ser:PatientServiceService,public rout:Router) { }
  
  newPatient:patient=new patient(0,"","","","",0,new Date(),"","");
  newCorona:Corona=new Corona(0,new Date(),new Date());
  newVaccination:Vaccination=new Vaccination(0,new Date(),"");
  n:Vaccination[]=[new Vaccination(0,new Date(),"")];
  GetVaccinated:Date[]=[new Date()];
  manufacturer:string[]=[""];
  addMe:number=0;
  d:Date=new Date();
  m:string="";

   saveChanges(){
    this.rout.navigate(['allPatients']);

    for(var i=0;i<this.n.length;i++){  
      this.n[i].Id=this.newPatient.Id;}
        var num:number=5;
    var num1:number=5;
    var num2:number=5;
  

   if(this.newPatient.Id!=null){
  this.ser.addPatient(this.newPatient).subscribe(succ=>{num=succ,this.rout.navigate(['allPatients'])});
  this.newCorona.Id=this.newPatient.Id;
  this.newVaccination.Id=this.newPatient.Id;
  this.ser.addCorona(this.newCorona).subscribe(succ=>num1=succ);
  for(var i=0;i<this.n.length;i++){
  this.ser.addVaccination(this.n[i]).subscribe(succ=>num2=succ);}

  
  // if(num==1){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'נשמרת בהצלחה ',
    showConfirmButton: false,
    timer: 1500
  })

   this.rout.navigate(['allPatients']);
  //else{
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'אופס...',
  //     text: 'תעודת הזהות שהזנת כבר רשומה נסה שנית',
  //   })
  // }
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'אופס...',
      text: 'ישנן שגיאות בעמוד.',
    })  
  }      this.rout.navigate(['allPatients']);

   }
 cancel(){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'בטוח?',
    text: "האם אתה בטוח שברצונך לבטל?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'כן!',
    cancelButtonText: 'לא!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'O.K!',
        
        'success'
      )
      this.rout.navigate(['allPatients']);
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'מעולה',
        'אתה נשאר איתנו',
        'success'
      )
    }
  })
  
 } 
//  vaccination=new Vaccination[];
//  updateVaccination(){
//   console.log(this.GetVaccinated);
//   this.GetVaccinated=this.GetVaccinated.filter(item=>item!=null);
//   this.GetVaccinated.push(new Date());
//   console.log(this.GetVaccinated);
// }
// updateVaccination1(){
//   console.log(this.manufacturer);
//   this.manufacturer=this.manufacturer.filter(item=>item!=null);
//   this.manufacturer.push("");
//   console.log(this.manufacturer);
// }
addVaccition(){
  if(this.addMe!=3){
  if(this.n[this.addMe].GetVaccinated!=null&&this.n[this.addMe].manufacturer!=""){
  var nn:Vaccination=new Vaccination(0,this.d,this.m)
  this.n.push(nn);
  this.d=new Date();
  this.m="";
  this.addMe++;}}
  else{
    Swal.fire({
      icon: 'error',
      title: 'שגיאה',
      text: 'לא יתכן יותר מארבעה חיסונים',
    })  
  }
}
  funcindex(index: any, item: any) {
    {return index;}
   
 }
 funcindex1(index: any, item: any) {
  {return index;}
 
}
  ngOnInit(): void {
  }

}
