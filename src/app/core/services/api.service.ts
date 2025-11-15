import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  private baseUrl = environment.apiUrl;

  constructor(private http: Http) { }

  private getHeaders(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || [];
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  get(path: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${path}`)
      .map(this.extractData)
      // ._do(data => console.log(data))
      .catch(this.handleError);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${this.baseUrl}${path}`,
      JSON.stringify(body),
      this.getHeaders()
    )
      .map(this.extractData)
      .catch(this.handleError);
  }





}
