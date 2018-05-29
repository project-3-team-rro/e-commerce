import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Array<any> = [];
  newComment = { content: '' };
  showForm: Boolean = false;



  addNew(): void {
    const newOne = { content: this.newComment.content };
    this.comments.push(newOne);
  }


  createNewComment(contentArg: string): void {
    const newComment = { content: contentArg };
    this.comments.push(newComment);
  }

  deleteTheComment(entireComment) {
    const index = this.comments.indexOf(entireComment);
    this.comments.splice(index, 1);
  }


  constructor() { }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit() {
  }
}
