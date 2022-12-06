import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FacebookService } from './service/facebook/facebook.service';
import { ILinkedInRedirectURL, LinkedinService } from './service/linkedin/linkedin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }


}
