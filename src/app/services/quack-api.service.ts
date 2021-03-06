import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quack } from '../models/quack.model';
import { User } from '../models/user.model';
import { HttpService } from './http.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class QuackApiService {
  private baseURL: string;

  constructor(private http: HttpClient, private userService: UserService) {
    this.baseURL = HttpService.SERVER_URL;
  }

  getQuackById(id: number) {
    return this.http.get(`${this.baseURL}/api/quack/${id}`);
  }

  createQuack(body): Observable<any> {//ready
   
    return this.http.post(`${this.baseURL}/api/quack`, body);
  }

  deleteQuackById(id: number) {
    return this.http.delete(`${this.baseURL}/api/quack/${id}`);
  }

  likeQuack(id: number): Observable<any> {
    let user = this.userService.getActiveUser();
    let body = {
      qId: id,
      uId: user.id,
    };
    return this.http.put(`${this.baseURL}/api/quack/like`, body);
  }

  repostQuack(id: number): Observable<any> {
    let user = this.userService.getActiveUser();
    let body = {
      qId: id,
      uId: user.id,
    };
    return this.http.put(`${this.baseURL}/api/quack/repost`, body);
  }

  getQuacksByUser(userName: string) {
    return this.http.get(`${this.baseURL}/api/quacks/${userName}`);
  }

  getQuacksAndRepliesByUser(id) {
    return this.http.get(`${this.baseURL}/api/replies/${id}`)
  }

  // getMediaQuacksByUser(userName: string) {

  // }

  getLikedQuacksByUser(userName: string) {
    return this.http.get(`${this.baseURL}/api/${userName}/likes`);
  }

  getFollowedQuacks(userName: string): Observable<any> {
    return this.http.get(`${this.baseURL}/api/quacks/following/${userName}`);
  }

  replyQuack(id:number): Observable<any> {
    let body = {
      qId: '',
      uId: '',
      text: '',
      replyTo:id
    };
    return this.http.post(`${this.baseURL}/api/quack/reply`, body);
  }

  getFollowersOfUser(id: number) {
    return this.http.get(`${this.baseURL}/api/followers/${id}`);
  }
}
