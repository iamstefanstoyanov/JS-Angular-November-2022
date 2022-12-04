import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent {
  postsList: IPost[] | null = null;
  posts: any;
  constructor(private apiService: ApiService){

  }
  ngOnInit(): void {
      this.apiService.loadPosts(5).subscribe({
        next: (value) => {
          this.postsList = value;

        },
        error: (err) => {
          console.error(err);
        }
  })
}
}