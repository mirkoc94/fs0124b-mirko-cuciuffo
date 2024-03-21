import { Injectable } from '@angular/core';
import { iPost } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postArr:iPost[] = [];

  getAllPosts():Promise<iPost[]> {
    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((res:iPost[])=>res)
  }

  getActivePost():Promise<iPost[]> {
    return this.getAllPosts()
    .then(res => res.filter(p => p.active))
  }

  getInactivePost():Promise<iPost[]> {
    return this.getAllPosts()
    .then(res => res.filter(p => !p.active))
  }

}
