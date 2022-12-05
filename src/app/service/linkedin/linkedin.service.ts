import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  linkedInLogin(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' })

    return this.http.get(`${this.BASE_URL}/login/linkedIn`, { headers: headers, observe: "response" })
  }
}
