import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previoustrials',
  templateUrl: './previoustrials.page.html',
  styleUrls: ['./previoustrials.page.scss'],
})
export class PrevioustrialsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  share(){
    this.router.navigate(['share']);
  }
}
