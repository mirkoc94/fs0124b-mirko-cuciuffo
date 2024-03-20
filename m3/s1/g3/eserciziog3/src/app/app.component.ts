import { iContentJson } from './Models/content-json';
import { Component } from '@angular/core';
import { iPost } from './Models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  postArr:iPost[] = [];
  randArr:iPost[] = [];

  ngOnInit(){
    fetch('../assets/db.json')
    .then(res => res.json())
    .then((contenutoJson:iContentJson) => {

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
