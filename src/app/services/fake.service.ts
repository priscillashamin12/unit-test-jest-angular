import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private http: HttpClient) { }

  getDataV1(): Observable<any>{
    const url = 'http://jsonplaceholder.typicode.com/todo/1';
    return this.http.get(url)
  }

  getDataV2(): Observable<any>{
    const url = 'http://jsonplaceholder.typicode.com/todo/1';
    return this.http.get(url).pipe(
      tap((data:any) => console.log('Data fetched', data)),
      catchError(this.handleError('test 404 error'))
    );
  }

  postDataV1(data:any): Observable<any>{
    const url = 'http://jsonplaceholder.typicode.com/todo/1';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.post(data, url, httpOptions)
  }

  private handleError<T>(operation = 'operation'){
    return (error:HttpErrorResponse): Observable<T> => {
      console.log(error);
      const message = `server returned code' ${error.status} with body "${error.error}"`;
      throw new Error (`${operation}failed:$(message)`);
    }
  }
}
