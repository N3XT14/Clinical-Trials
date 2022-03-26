import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Patient } from '../register/register.page';

@Component({
  selector: 'app-updatepersonaldetails',
  templateUrl: './updatepersonaldetails.page.html',
  styleUrls: ['./updatepersonaldetails.page.scss'],
})
export class UpdatepersonaldetailsPage implements OnInit {

  address: string;
  pincode: number;
  fullname: string;
  contactno: number;
  gender: string;
  dob: string;
  
  private personalDetails: AngularFirestoreCollection<Patient>;

  constructor(public router:Router,
    db: AngularFirestore,
    private activatedRoute: ActivatedRoute) { 
      this.fullname = this.activatedRoute.snapshot.paramMap.get('fullname');
      this.personalDetails = db.collection('Patient');
    }

  ngOnInit() {
    this.personalDetails.doc(this.fullname).get().toPromise().then(res => {
      this.address = res.data()['address'];
      this.contactno = res.data()['contactno'];
      this.pincode = res.data()['pincode'];
      this.dob = res.data()['dob'];
    })
  }

  submit(){
    this.personalDetails.doc(this.fullname).update({
      address: this.address,
      contactno: this.contactno,
      pincode: this.pincode
    })
    this.router.navigate(['profile']);
  }

}
