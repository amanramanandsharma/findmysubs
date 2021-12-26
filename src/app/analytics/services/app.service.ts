import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Importing Global variables

@Injectable({
  providedIn: 'root',
})
export class AppService {


  private extractData(res: Response): Response | null {
    const body = res;
    return body || null;
  }

  constructor(private http: HttpClient) {}

  public getDummyMovie(id): Observable<any> {
    return this.http.get('https://www.omdbapi.com/?i='+id+'&apikey=6106ddc5').pipe(map(this.extractData));
  }

}
