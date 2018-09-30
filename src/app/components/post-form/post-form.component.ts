import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
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
  @Output()
  updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input()
  currentPost: Post;
  @Input()
  isEdit: boolean;
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
  updatePost() {
    console.log("123" + this.currentPost.id);
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }
}
