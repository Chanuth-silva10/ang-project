import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  title:string = "List of Posts";
  messagePost: string = 'Message post'

  postParentMessage:string = 'Message coming from the post parent'

  childMessage:string = 'From Child Component'

  @Input() fromParent?:string;

  constructor(){}
  ngOnInit(): void {
    
  }

}
