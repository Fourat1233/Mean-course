import { Component, OnInit, OnDestroy } from '@angular/core';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

   posts: Post[] = [];

  private postsSub: Subscription;

 constructor(public PostsService: PostsService) {
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  ngOnInit() {
    this.posts = this.PostsService.getPosts();
    this.postsSub = this.PostsService.getPostUpdateListener().subscribe(
      (posts: Post[]) => {
        this.posts = posts ;
      }

    );
  }

}
