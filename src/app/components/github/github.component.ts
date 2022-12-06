import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/service/github/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private githubService: GithubService,
  ) { }

  state: string = ""
  code: string = ""
  linkedInUser: any

  ngOnInit(): void {
    const queryParams = this.activateRoute.snapshot.queryParams
    this.state = queryParams['state']
    this.code = queryParams['code']

    this.authorizeGithubUser()
  }

  authorizeGithubUser(): void {
    this.githubService.authorizeGithubUser({ state: this.state, code: this.code }).subscribe({
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
