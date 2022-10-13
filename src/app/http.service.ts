import { Post } from './post';
import { Post2 } from './Post2';
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  // Pobieramy wszystkie posty
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
  // Pobieramy jeden post podając id
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }
  // Pobieramy wszystkie posty Usera podajac w parametrze jego userId
  getPostByPostId(postId: number): Observable<Array<Post2>> {
    const parm = new HttpParams().set('postId', '1');

    return this.http.get<Array<Post2>>(
      'https://jsonplaceholder.typicode.com/comments',
      { params: parm }
    );
  }
  // Dodajemy nowy post
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(
      'https://jsonplaceholder.typicode.com/posts',
      post
    );
  }

  // Updateujemy post
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + post.id,
      post
    );
  }

  // Usuwamy post, podając id
  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + id + ''
    );
  }
  // Aktualizujemy pola w post
  changePost(post: Post): Observable<Post> {
    return this.http.patch<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + post.id,
      post
    );
  }
}
