import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILinkedInRedirectURL, LinkedinService } from 'src/app/service/linkedin/linkedin.service';

@Component({
  selector: 'app-linked-in',
  templateUrl: './linked-in.component.html',
  styleUrls: ['./linked-in.component.css']
})
export class LinkedInComponent implements OnInit {

  constructor(
    private linkedInService: LinkedinService,
    private activateRoute: ActivatedRoute,
  ) { }

  state: string = ""
  code: string = ""
  linkedInUser: any

  ngOnInit(): void {
    const queryParams = this.activateRoute.snapshot.queryParams
    this.state = queryParams['state']
    this.code = queryParams['code']

    this.authorizeLinkedInUser()
  }

  authorizeLinkedInUser(): void {
    this.linkedInService.authorizeLinkedInUser({ state: this.state, code: this.code }).subscribe({
      next: (response: any) => {
        console.log(response);
        console.log("success :)");
        this.linkedInUser = response.body
      },
      error: (err: any) => {
        console.error(err);
        console.error("error :(");
      }
    })
  }
}
