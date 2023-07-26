import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'List of Posts';
  messagePost: string = 'Message post';

  postParentMessage: string = 'Message coming from the post parent';

  childMessage: string = 'From Child Component';

  outputChildMessage: string = 'Message from Child Component Via Output';

  @Input() fromParent?: string;

  @Output() messegeEvent = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {}

  sendMessage() {
    this.messegeEvent.emit(this.outputChildMessage);
  }

  
}
