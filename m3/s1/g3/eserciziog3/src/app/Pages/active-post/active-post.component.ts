import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {

  postArr:iPost[] = [];

  constructor(private postSvc:PostService){}

  ngOnInit(){

    this.postSvc.getActivePost().then(res => {

      this.postArr = res;

    })

  }

}
