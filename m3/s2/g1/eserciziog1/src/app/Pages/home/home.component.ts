import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postArr:iPost[] = [];
  randArr:iPost[] = [];

  constructor(private postSvc:PostService){}

  ngOnInit() {

    this.postSvc.getAllPosts()
    .then(res => {

      this.postArr = res;
      this.getRandomPost()})

  }

  getRandomPost(){
    for(let i = 0; i < 4; i++){
      let random:number = Math.floor(Math.random() * this.postArr.length)
      this.randArr.push(this.postArr[random])
    }
  }

}
