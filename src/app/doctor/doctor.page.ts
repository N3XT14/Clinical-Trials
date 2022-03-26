import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Doctor{
  fullname: string;
  dob: string;
  sex: string;
  mci_number: string;
  specialization: string;
  contactno: string;
  address: string;
  pincode: number;
  email: string;
  password: string;
  clinic_name : string;
  doc_address: string;
  doc_pincode: number;
  clinic_city: string;
  clinic_state: string;
}

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})

export class DoctorPage implements OnInit, Doctor {
  
  fullname: string;
  dob: string;
  sex: string;
  mci_number: string;
  specialization: string;
  contactno: string;
  address: string;
  pincode: number;
  email: string;
  password: string;
  confirm_password: string;
  clinic_name : string;
  doc_address: string;
  doc_pincode: number;
  clinic_city: string;
  clinic_state: string;
  private doctorCollection: AngularFirestoreCollection<Doctor>;
  
  constructor(private router: Router,
    db: AngularFirestore) {
      this.doctorCollection = db.collection('Doctor');
    }
    
    ngOnInit() {
    }
    
    next(){
      if(this.password != this.confirm_password){
        alert("Passwords does not match.")
      } else {
        this.doctorCollection.doc(this.fullname).set({
          fullname: this.fullname,
          dob: this.dob.toString(),
          sex: this.sex,
          mci_number: this.mci_number,
          specialization: this.specialization,
          contactno: this.contactno,
          address: this.address,
          pincode: this.pincode,
          email: this.email,
          password: this.password,
          clinic_name : this.clinic_name,
          doc_address: this.doc_address,
          doc_pincode: this.doc_pincode,
          clinic_city: this.clinic_city,
          clinic_state: this.clinic_state,
          status: "Pending"
        });
      }
    }
  }
  