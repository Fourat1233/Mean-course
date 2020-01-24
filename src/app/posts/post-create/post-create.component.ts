import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-post-create',
 templateUrl: './post-create.component.html',
 styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {


 constructor(public postService: PostsService){ }

onAddPost(form: NgForm) {
  if (form.invalid) {
    return;
  }
  this.postService.addpost(form.value.title , form.value.content);
  form.resetForm();
}
}
