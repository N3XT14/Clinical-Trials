import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ongoingtrials',
  templateUrl: './ongoingtrials.page.html',
  styleUrls: ['./ongoingtrials.page.scss'],
})
export class OngoingtrialsPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  cancel(){
    console.log('hello');
  }

  view(){
    console.log('hello');
  }
}
