import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authSvc:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const accessToken = this.authSvc.getAccessToken()

    const newRequest = request.clone({
      headers: request.headers.append('Authorization', 'Bearer ' + accessToken)
    })

    return next.handle(newRequest);

  }
}
