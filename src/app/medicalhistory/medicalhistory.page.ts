import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Patient } from '../register/register.page';

export interface MedicalHistory{
  age: string,
  sex: string,
  bg: string,
  bp: string,
  diabetes: string,
  thyroid: string,
  cardiology: string,
  alcohol: string,
  tobacco: string
}

@Component({
  selector: 'app-medicalhistory',
  templateUrl: './medicalhistory.page.html',
  styleUrls: ['./medicalhistory.page.scss'],
})
export class MedicalhistoryPage implements OnInit {

  public medicalHistoryCollection: AngularFirestoreCollection<MedicalHistory>;
  fullname: string;
  age: string;
  sex: string;
  bg: string;
  practice_performed_before: string;
  ongoing_treatment: string;
  taking_medicine: string;
  go_to_hospital: string;
  regular_doctor: string;
  allergic: string;
  bp: string;
  diabetes: string;
  implantation: string;
  medication_for_emergency: string;
  thyroid: string;
  cardiology: string;
  fractures: string;
  operated_berfore: string;
  alcohol: string;
  tobacco: string;

  constructor(public router: Router,
    private activatedRoute: ActivatedRoute,
    db: AngularFirestore) {
      this.fullname = this.activatedRoute.snapshot.paramMap.get('fullname');
      this.age = this.activatedRoute.snapshot.paramMap.get('age');
      this.sex = this.activatedRoute.snapshot.paramMap.get('gender');
      this.medicalHistoryCollection = db.collection<Patient>('Patient').doc(this.fullname).collection<MedicalHistory>('MedicalHistory');
     }
 
  ngOnInit() {
  }

  submit(){

    this.medicalHistoryCollection.doc('MedicalRequirement').set({
      age: this.age,
      sex: this.sex,
      bg: this.bg,
      bp: this.bp,
      diabetes: this.diabetes,
      thyroid: this.thyroid,
      cardiology: this.cardiology,
      alcohol: this.alcohol,
      tobacco: this.tobacco
    })
    this.router.navigate(['triallist/'+this.fullname]);
  }
}
