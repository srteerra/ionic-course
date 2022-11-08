import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.route.snapshot.paramMap.get('id');
  }
}
