import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const httpParams = request.params.append('api_key', environment.API_KEY);
    const defaultRequest = request.clone({params: httpParams});
    return next.handle(defaultRequest);
  }

}
