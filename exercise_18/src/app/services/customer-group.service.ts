import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerGroup } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerGroupService {
  private jsonUrl = 'assets/data/customers.json';

  constructor(private http: HttpClient) {}

  getCustomerGroups(): Observable<CustomerGroup[]> {
    return this.http.get<CustomerGroup[]>(this.jsonUrl);
  }
}
