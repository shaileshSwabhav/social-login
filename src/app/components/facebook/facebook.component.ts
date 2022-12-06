import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacebookService } from 'src/app/service/facebook/facebook.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  constructor(
    private facebookService: FacebookService,
    private activateRoute: ActivatedRoute,
  ) { }

  state: string = ""
  code: string = ""
  linkedInUser: any

  ngOnInit(): void {
    const queryParams = this.activateRoute.snapshot.queryParams
    this.state = queryParams['state']
    this.code = queryParams['code']

    this.authorizeFBUser()
  }

  authorizeFBUser(): void {
    this.facebookService.authorizeFBUser({ state: this.state, code: this.code }).subscribe({
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
