import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Post } from "../../models/post";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  post: Post;
  @Output()
  newPost: EventEmitter<Post> = new EventEmitter();
  constructor(private postService: PostService) {}

  ngOnInit() {}
  addPost(title, body) {
    //console.log(title, body);
    if (!title || !body) {
      alert("Please add post!");
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        //console.log(post + " from service");
        this.newPost.emit(post);
      });
    }
  }
}
