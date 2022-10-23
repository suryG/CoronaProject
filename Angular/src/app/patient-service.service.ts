import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { patient } from './models/patient';
import { Corona } from './models/Corona';
import { Vaccination } from './models/Vaccination';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  patientDetail2:any;
  coronaDetail:any;
  vaccinationDetail:any;

  editPatientDetails:any;
  constructor(private http:HttpClient) { }
  allPatients():Observable <patient[]>{
   
    return this.http.get<patient[]>("https://localhost:44376/Patients/allPatients");
  }
  MyCorona(Id:patient):Observable <Corona>{
    return this.http.post<Corona>("https://localhost:44376/Patients/MyCorona",Id);

  }
  
  MyVaccition(Id:patient):Observable <Vaccination[]>{
    return this.http.post<Vaccination[]>("https://localhost:44376/Patients/MyVaccition",Id);

  }

  addPatient(u:patient):Observable <number>{
   
    return this.http.post<number>("https://localhost:44376/Patients/addPatient",u);
  }
  addCorona(u:Corona):Observable <number>{
   
    return this.http.post<number>("https://localhost:44376/Patients/addCorona",u);
  }
  addVaccination(u:Vaccination):Observable <number>{
   
    return this.http.post<number>("https://localhost:44376/Patients/addVaccination",u);
  }
  
  editPatient(u:patient):Observable <number>{
   
    return this.http.post<number>("https://localhost:44376/Patients/change",u);
  }
  editCorona(u:Corona):Observable <number>{
   
    return this.http.post<number>("https://localhost:44376/Patients/changeCorona",u);
  }
  editVaccination(u:Vaccination):Observable <number>{
   
    return this.http.post<number>("https://localhost:44376/Patients/changeVaccination",u);
  }
  deletePatient(Id:patient):Observable <number>{
   
    return this.http.post<number>("https://localhost:44376/Patients/delete",Id);
  }
  deleteCorona(Id:patient):Observable <number>{
   
    return this.http.post<number>("https://localhost:44376/Patients/deleteC",Id);
  }
  deleteVaccination(Id:patient):Observable <number>{
   
    return this.http.post<number>("https://localhost:44376/Patients/deleteV",Id);
  }
  patientDetail(u:patient):Observable <patient>{
   
    return this.http.post<patient>("https://localhost:44376/Patients/change",u);
  }
  detailCorona(u:patient):Observable <Corona>{
   
    return this.http.post<Corona>("https://localhost:44376/Patients/detailCorona",u);
  }

}
