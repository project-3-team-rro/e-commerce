import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
  comments: any;
  message: String = 'Loading threads...';

  // user: { username: string, email: string, password: string } = {
  //   username: '',
  //   email: '',
  //   password: ''
  // };
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getThreads()
      .subscribe(
        comment => {
          this.comments = comment;
          this.message = '';
        },
        err => {
          this.message = 'Error loading comments';
        }
      );
  }

}
