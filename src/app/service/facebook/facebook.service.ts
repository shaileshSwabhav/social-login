import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  private readonly BASE_URL = `${environment.BASE_URL}` 

  constructor(
    private http: HttpClient
  ) { }

  facebookLogin(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' })

    return this.http.get(`${this.BASE_URL}/login/facebook`, { headers: headers, observe: "response" })
  }
  
  authorizeFBUser(params?: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' })
    return this.http.get(`${this.BASE_URL}/auth/facebook/callback`, { 
      headers: headers, observe: "response", params: params, 
    })
  }
}
