import { Component } from '@angular/core';
import { iContentJson } from '../../Models/content-json';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postArr:iPost[] = [];
  randArr:iPost[] = [];

  ngOnInit(){
    fetch('../assets/db.json')
    .then(res => res.json())
    .then((contenutoJson:iContentJson) => {

      this.postArr = contenutoJson.posts
      this.getRandomPost(4)
    })
  }

  getRandomPost(n:number){
    for (let i = 0; i < n; i++) {
      let random = Math.floor(Math.random() *this.postArr.length)
      this.randArr.push(this.postArr[random])
    }
  }

}
