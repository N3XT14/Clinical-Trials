import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MedicalHistory } from '../medicalhistory/medicalhistory.page';
import { Trial } from '../triallist/triallist.page';

@Component({
  selector: 'app-trialdetails',
  templateUrl: './trialdetails.page.html',
  styleUrls: ['./trialdetails.page.scss'],
})
export class TrialdetailsPage implements OnInit {
  
  private patientRequest: AngularFirestoreCollection<Trial>;
  private medicalHistoryDocument: AngularFirestoreDocument<MedicalHistory>;
  labName: string;  
  trialName: string;
  fullname: string;
  age: string;
  alcohol: string;
  bg: string;
  bp: string;
  cardiology: string;
  thyroid: string;
  diabetes: string;
  tobacco: string;
  sex: string;
  muscle: string;
  
  constructor(public router:Router,
    db: AngularFirestore,
    private activatedRoute: ActivatedRoute) { 
      this.fullname = this.activatedRoute.snapshot.paramMap.get('fullname');
      this.labName = this.activatedRoute.snapshot.paramMap.get('labName');
      this.trialName = this.activatedRoute.snapshot.paramMap.get('trialName');
      this.patientRequest = db.collection('Lab').doc('Lab_1').collection('Trial').doc('Trial_1').collection('PatientRequest');
      this.medicalHistoryDocument = db.collection('Patient').doc(this.fullname).collection<MedicalHistory>('MedicalHistory').doc('MedicalRequirement');
      
    }
    
    ngOnInit() {
    }
    
    apply(){
      this.medicalHistoryDocument.get().toPromise().then(res => {
        this.age = res.data()['age'],
        this.alcohol = res.data()['alcohol'],
        this.bg = res.data()['bg'],
        this.bp = res.data()['bp'],
        this.cardiology = res.data()['cardiology'],
        this.thyroid = res.data()['thyroid'],
        this.diabetes = res.data()['diabetes'],
        this.tobacco = res.data()['tobacco'],
        this.sex = res.data()['sex'],
        this.muscle = res.data()['Muscle_Growth']
      });
      this.patientRequest.doc(this.fullname).set({
        age: this.age,
        alcohol: this.alcohol,
        bg: this.bg,
        bp: this.bp,
        cardiology: this.cardiology,
        thyroid: this.thyroid,
        diabetes: this.diabetes,
        tobacco: this.tobacco,
        sex: this.sex,
        Muscle_Growth: this.muscle,
      });
      this.router.navigate(['trialcenters/'+this.fullname]);
    }
  }