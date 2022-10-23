import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { patient } from '../models/patient';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {

  constructor(public ser1:PatientServiceService,public rout:Router) { 
  console.log(this.patientList);}
  public patientList :patient[]=[]; 
  allPatients(){
     const allList = this.ser1.allPatients().subscribe(succ => {this.patientList=succ;
    console.log(this.patientList);
  this.patientFilter=succ;} );
    
  }    
add(){
  this.rout.navigate(['addPatient']);
}
delete(p:patient){

  Swal.fire({
    title: 'בטוח?',
    text: "האם ברצוך למחוק לקוח זה סופית?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'כן!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.ser1.deletePatient(p).subscribe(succ=>{console.log(succ);location.reload()});
      this.ser1.deleteCorona(p).subscribe(succ=>console.log(succ));
      
      this.ser1.deleteVaccination(p).subscribe(succ=>console.log(succ));
      
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
this.rout.navigate(['allPatients']);}
 edit(patient:patient){

  { console.log(patient);
    this.ser1.editPatientDetails=patient;
    this.rout.navigate(['editPatient']);}
 }
 details(patient:patient){console.log(patient);
  this.ser1.patientDetail2=patient;
  this.rout.navigate(['patientDetails']);}
 x:string="";
  search:string="";
   patientFilter:patient[]=[]; 
  ngOnInit(): void {
    this.allPatients();
   
  }

}
