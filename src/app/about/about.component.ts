import { Component, OnInit } from '@angular/core';

// gives you access to the route parameters EX: about/48
import {ActivatedRoute} from '@angular/router';

// Component to Component routing via logic
import {Router} from '@angular/router';

import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;
  // dependency injection
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    // ID is our route parameter 
    this.route.params.subscribe(res => console.log(res.id));
  }

  sendMeHome() {
    this.router.navigate(['']); // sends you to home component with path ''
  }
  ngOnInit() {
    this._data.goal.subscribe(res=> this.goals = res);
  }

}
