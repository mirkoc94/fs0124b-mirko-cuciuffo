import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Output() editPostEvent = new EventEmitter<string>()
  @ViewChild('post-title')
  postTitle!: ElementRef;
  @ViewChild('post-text')
  postText!: ElementRef

  editPost(){
    this.editPostEvent.emit(this.postTitle.nativeElement.value)
    this.editPostEvent.emit( this.postText.nativeElement.value)
  }

}
