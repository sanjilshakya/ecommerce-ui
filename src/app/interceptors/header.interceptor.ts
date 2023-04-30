import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loggedInUser: any = JSON.parse(localStorage.getItem('loggedInUser')!);
        let Authorization = '';
        if (loggedInUser) Authorization = `Bearer ${loggedInUser.token}`;
        return next.handle(httpRequest.clone({ setHeaders: { Authorization } }));
    }
}