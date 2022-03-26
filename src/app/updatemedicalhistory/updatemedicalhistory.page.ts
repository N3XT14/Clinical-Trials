import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MedicalHistory } from '../medicalhistory/medicalhistory.page';

@Component({
  selector: 'app-updatemedicalhistory',
  templateUrl: './updatemedicalhistory.page.html',
  styleUrls: ['./updatemedicalhistory.page.scss'],
})
export class UpdatemedicalhistoryPage implements OnInit {

  fullname: string;
  
  private medicalRequirementDocument: AngularFirestoreDocument<MedicalHistory>;
  constructor(public router:Router,
    private activatedRoute: ActivatedRoute,
    db: AngularFirestore) { 
      this.fullname = this.activatedRoute.snapshot.paramMap.get('fullname');
      this.medicalRequirementDocument = db.collection('Patient').doc(this.fullname).collection('MedicalHistory').doc('MedicalRequirement');
    }

  ngOnInit() {
  }

  submit(){
    this.router.navigate(['profile']);
  }

}
