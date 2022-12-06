import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly BASE_URL = `${environment.BASE_URL}`

  constructor(
    private http: HttpClient
  ) { }

  githubLogin(): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' })

    return this.http.get<any>(`${this.BASE_URL}/login/github`, { headers: headers, observe: "response" })
  }

  authorizeGithubUser(params?: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' })
    return this.http.get<any>(`${this.BASE_URL}/auth/github/callback`, {
      headers: headers, observe: "response", params: params,
    })
  }
}
