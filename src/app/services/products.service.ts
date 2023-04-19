import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { APICONSTANTS } from '../constants';

const API_BASE_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends HttpService {

  constructor(http: HttpClient) {
    super(`${API_BASE_URL}${APICONSTANTS.PRODUCT}`, http)
  }
}
