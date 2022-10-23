import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { patient } from '../models/patient';
import { Vaccination } from '../models/Vaccination';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

 
  myPatient=this.ser.editPatientDetails;
public listPatients :patient[]=[];
// allPatients(){
//   const allList = this.ser.allPatients().subscribe(succ => {this.listPatients=succ;
//  console.log(this.listPatients);} );
// }
  constructor(public ser:PatientServiceService,public rout:Router) { }
 newPatient:any;
 newCorona:any;
 newVaccition:Vaccination[]=[new Vaccination(1,new Date("02/02/2020"),"Moderna")];
  saveChanges(){
    this.rout.navigate(['allPatients']);
    this.ser.editPatient(this.myPatient).subscribe(succ=>console.log(succ));
 this.ser.editCorona(this.newCorona).subscribe(succ=>console.log(succ));
 for(var i=0;i<this.newVaccition.length;i++){
 this.ser.editVaccination(this.newVaccition[i]).subscribe(succ=>console.log(succ));
}
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'השינויים נשמרו בהצלחה',
      showConfirmButton: false,
      timer: 1500
    })
 
 this.rout.navigate(['allPatients']);
 
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
    
   }  funcindex(index: any, item: any) {
  return index;
}
 addMe:number=0;
 n:Vaccination[]=this.newVaccition;

addVaccition(){

  if(this.newVaccition.length<=3){
    
    var nn:Vaccination=new Vaccination(0,new Date(),"");

    this.n.push(nn);
this.addMe++;
  }
}
  ngOnInit(): void {
    this.ser.MyCorona(this.myPatient.Id).subscribe(succ=>this.newCorona=succ);
    this.ser.MyVaccition(this.myPatient.Id).subscribe(succ=>this.newVaccition=succ);
this.addMe=this.newVaccition.length;
console.log(this.newCorona);
console.log(this.newVaccition);

  }

}
