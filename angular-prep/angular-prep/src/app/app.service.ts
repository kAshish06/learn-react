import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public domainHost: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  public getAnimals(): Observable<object> {
    const url = this.getUrl('animals');
    return this.http.get(url);
  }
  private getUrl(routePath: string): string {
    return this.domainHost.concat(routePath);
  }
}
