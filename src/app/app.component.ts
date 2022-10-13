import { HttpService } from './http.service';
import { Post } from './post';
import { Post2 } from './Post2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HttpAngular';

  constructor(private HttpService: HttpService) {}

  getPosts() {
    this.HttpService.getPosts().subscribe((dane) => {
      console.log(dane);
    });
  }
  getPost() {
    this.HttpService.getPost(1).subscribe((dane) => {
      console.log(dane);
    });
  }
  getPostByPostId() {
    this.HttpService.getPostByPostId(1).subscribe((dane) => {
      console.log(dane);
    });
  }
  addPost() {
    const p: Post = {
      userId: 1,
      id: 1,
      title: 'Mój post',
      body: 'Pierwszy post o angularze!',
    };

    this.HttpService.addPost(p).subscribe((dane) => {
      console.log(dane);
    });
  }

  updatePost() {
    const p: Post = {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecatu excepturi optio reprehenderit',
      body: 'nowy wspis',
    };
    this.HttpService.updatePost(p).subscribe((dane) => {
      console.log(dane);
    });
  }
  deletePost() {
    this.HttpService.deletePost(1).subscribe((dane) => {
      console.log(dane);
    });
  }
  changePost() {
    const p: Post = {
      id: 1,
      body: 'zmieniam tylko wpis',
    };
    this.HttpService.changePost(p).subscribe((dane) => {
      console.log(dane);
    });
  }
}
