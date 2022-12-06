import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinkedinService {

  private readonly BASE_URL = `${environment.BASE_URL}` 

  constructor(
    private http: HttpClient
  ) { }

  linkedInLogin(): Observable<HttpResponse<ILinkedInRedirectURL>> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' })

    return this.http.get<ILinkedInRedirectURL>(`${this.BASE_URL}/login/linkedIn`, { headers: headers, observe: "response" })
  }

  authorizeLinkedInUser(params?: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' })
    return this.http.get<ILinkedInRedirectURL>(`${this.BASE_URL}/auth/linkedIn/callback`, { 
      headers: headers, observe: "response", params: params, 
    })
  }
}

export interface ILinkedInRedirectURL {
  url: string
}