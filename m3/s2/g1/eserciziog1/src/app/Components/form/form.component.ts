import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  postArr:iPost[] = [];

  @Output() editPostEvent = new EventEmitter<string>();
  @ViewChild('post_title')
  postTitle!: ElementRef;
  @ViewChild('post_body')
  postBody!: ElementRef;

  editPost(){
    this.editPostEvent.emit(this.postTitle.nativeElement.value)
    this.editPostEvent.emit(this.postBody.nativeElement.value)
  }

}
