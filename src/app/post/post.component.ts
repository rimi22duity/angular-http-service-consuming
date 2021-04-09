import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any;
  
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
             .subscribe(
                json => {
                  this.posts = json;
                }, 
                error => {
                  alert('an unexpected error occured!');
                  console.log(error);
                }
             );
  }

  creatPost(titleInput: HTMLInputElement) {
    let post : any = {
      title: titleInput.value
    };

    titleInput.value = '';

    this.service.createPost(post)
              .subscribe(
                (data: any) => {
                  post.id = data.id;
                  this.posts.splice(0, 0, post);
                }, 
                error => {
                  alert('an unexpected error occured!');
                  console.log(error);
                }
              );
  }

  updatePost(post: any) {
    this.service.updatePost(post)
            .subscribe(
              data => {
                console.log(data);
              },
              error => {
                alert('an unexpected error occured!');
                console.log(error);
              }
            );

    //for put request:
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post: any) {
    this.service.deletePost(post.id)
              .subscribe(
                (response) => {
                  console.log(response.body);
                  
                  if (response.body == null) {
                    alert('This post has already been deleted!')
                  } else {
                    let index = this.posts.indexOf(post);
                    this.posts.splice(index, 1);
                  }
                }, 
                (error: Response) => {
                  console.log(error.body == null)
                  if(error.status == 404) {
                    alert('This post has already been deleted!')
                  } else {
                    alert('an unexpected error occured!');
                    console.log(error);
                  }
                }
              );
  }
}
