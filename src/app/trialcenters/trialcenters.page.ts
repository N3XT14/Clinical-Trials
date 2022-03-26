import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trialcenters',
  templateUrl: './trialcenters.page.html',
  styleUrls: ['./trialcenters.page.scss'],
})
export class TrialcentersPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  apply(){
    this.router.navigate(['hospital']);
  }

}
