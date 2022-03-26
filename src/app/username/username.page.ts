import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Patient } from '../register/register.page';
@Component({
  selector: 'app-username',
  templateUrl: './username.page.html',
  styleUrls: ['./username.page.scss'],
})
export class UsernamePage implements OnInit {

  fullname: string;
  gender: string;
  age: string;
  password: string;
  confirm_password: string;
  username: string;
  private patientCollection: AngularFirestoreCollection<Patient>;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    db: AngularFirestore) {
    this.fullname = this.activatedRoute.snapshot.paramMap.get('fullname');
    this.gender = this.activatedRoute.snapshot.paramMap.get('gender');
    this.age = this.activatedRoute.snapshot.paramMap.get('age');
    this.patientCollection = db.collection<Patient>('Patient');
  }

  ngOnInit() {}

  next(){
    if(this.password == this.confirm_password){
      this.patientCollection.doc(this.fullname).update({password: this.password}).then( res => {
        this.router.navigate(['medicalhistory/'+this.fullname+"/"+this.age+"/"+this.gender]);
      });
    } else {
      alert("Passwords does not match");
    }
    this.router.navigate(['medicalhistory/'+this.fullname+"/"+this.age+"/"+this.gender]);
  }
}
