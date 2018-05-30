import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  comment: { content: string } = { content: '' };
  message: String = '';
  showForm: Boolean = false;

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }


  createThread() {
    this.authService.newThread(this.comment)
      .subscribe(
        thread => {
          this.message = '';
          // this.router.navigate(['/merchandise']);
          location.reload();
        },
        err => {
          this.message = 'Error submitting thread';
        }
      );
  }





}
