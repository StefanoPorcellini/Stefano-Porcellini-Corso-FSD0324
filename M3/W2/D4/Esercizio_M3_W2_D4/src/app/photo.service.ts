import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { iPhoto } from './photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  likeCounter: number[] = [];
  likeCounterLength!:number

  likeSubject = new BehaviorSubject<number[]>([])
  like$ = this.likeSubject.asObservable()

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<iPhoto[]> {
    return this.http.get<iPhoto[]>(this.apiUrl).pipe(
      catchError((error) => {
        return throwError(() => console.error('ERRORE NELLA CHIAMATA GET'));
      })
    );
  }

  getLike(id:number) {
    this.likeCounter.push(id)
    this.likeSubject.next(this.likeCounter)
    this.likeCounterLength = this.likeCounter.length
  }



  }
