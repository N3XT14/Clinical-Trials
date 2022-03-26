import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Patient{
  fullname:string;
  dob: string;
  gender: string;
  contactno: string;
  address:string;
  pincode:number;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit,Patient {

  public patientCollection: AngularFirestoreCollection<Patient>;
  public patients: Observable<Patient[]>;
  age: string;
  fullname: string;
  dob: string;
  gender: string;
  contactno: string;
  address:string;
  pincode:number;

  constructor(public router: Router,
    db: AngularFirestore,
    private activatedRoute: ActivatedRoute) {
      this.fullname = this.activatedRoute.snapshot.paramMap.get('fullname');
      this.patientCollection = db.collection<Patient>('Patient');
    }

  ngOnInit() {
  }

  next(){

    this.patientCollection.doc(this.fullname).set({
      fullname: this.fullname,
      dob: this.dob.toString(),
      gender: this.gender,
      contactno: this.contactno,
      address: this.address,
      pincode: this.pincode});
    this.router.navigate(['username/'+this.fullname+"/"+this.age+"/"+this.gender]);
  }

}
