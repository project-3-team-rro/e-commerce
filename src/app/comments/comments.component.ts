import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Array<any> = [];
  newComment = { content: '' };
  showForm: Boolean = true;



  addNew(): void {
    const newOne = { content: this.newComment.content };
    this.comments.push(newOne);
    this.newComment.content = '';
    this.toggleForm();
    console.log('--------------------COMMENTS-----------------', this.comments);
  }


  createNewComment(contentArg: string): void {
    const newComment = { content: contentArg };
    this.comments.push(newComment);
    // console.log('----------');
  }

  deleteTheComment(entireComment) {
    const index = this.comments.indexOf(entireComment);
    this.comments.splice(index, 1);
  }


  toggleForm() {
    this.showForm = !this.showForm;
  }

  constructor() { }

  ngOnInit() {
    console.log('--------------------COMMENTS-----------------', this.comments);
    // console.log('--------------------------USER---------------');
  }
}
