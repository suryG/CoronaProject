import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { AppComponent } from './app.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [
  { path: 'allPatients', component:AllPatientsComponent},
  {path:'editPatient',component:EditPatientComponent},
  {path:'addPatient',component:AddPatientComponent},
  {path:'patientDetails',component:PatientDetailsComponent},
  { path: "", component:AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
