import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public signup(param: any): Observable<any> {
    return this.httpClient.post<any>(environment.backUrl + 'auth/signup', param);
  }

  public signin(param: any): Observable<any> {
    return this.httpClient.post<any>(environment.backUrl + 'auth/signin', param);
  }

}
