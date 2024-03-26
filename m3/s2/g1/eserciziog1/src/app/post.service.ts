import { Injectable } from '@angular/core';
import { iPost } from './Models/post';
import { iContentJson } from './Models/content-json';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postArr:iPost[] = [];

  getAllPosts():Promise<iPost[]> {
    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((res:iContentJson)=>res.posts)
  }

  //getRandomPost(n:number):Promise<iPost[]> {
  //  return this.getAllPosts()
  //  .then (res => {
  //    for (let i = 0; i < n; i++) {
  //      let random = Math.floor(Math.random() *this.postArr.length)
  //      this.randArr.push(this.postArr[random])
  //    }
//
  //    console.log(this.randArr);
  //    return this.randArr
  //  })
  //}

  getActivePost():Promise<iPost[]> {
    return this.getAllPosts()
    .then(res => res.filter(p => p.active))
  }

  getInactivePost():Promise<iPost[]> {
    return this.getAllPosts()
    .then(res => res.filter(p => !p.active))
  }

}
