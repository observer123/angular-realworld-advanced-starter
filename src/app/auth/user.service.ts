import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin, UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(userLogin: UserLogin): Observable<UserProfile> {
    return this.httpClient.post<UserProfile>('http://localhost:3000/api/users/login', userLogin);
  }
}
