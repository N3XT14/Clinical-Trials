import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  fullname: string;

  constructor(public router:Router,
    private activatedRoute: ActivatedRoute) { 
      this.fullname = this.activatedRoute.snapshot.paramMap.get('fullname');
    }

  ngOnInit() {
  }
  updateprofile(){
    this.router.navigate(['updatepersonaldetails/'+this.fullname]);
  }
  updatemedicalhistory(){
    this.router.navigate(['updatemedicalhistory/'+this.fullname]);
  }
  ongoing(){
    this.router.navigate(['ongoingtrials/'+this.fullname]);
  }
  prev(){
    this.router.navigate(['previoustrials/'+this.fullname]);
  }
  trialist(){
    this.router.navigate(['triallist/'+this.fullname]);
  }

}
