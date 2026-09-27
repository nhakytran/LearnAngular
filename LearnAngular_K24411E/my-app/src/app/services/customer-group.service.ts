import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomerGroup } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerGroupService {
  private jsonUrl = '/assets/data/customers.json';

  private defaultCustomerGroups: CustomerGroup[] = [
    {
      CustomerTypeId: 1,
      CustomterTypeName: 'VIP',
      Customers: [
        {
          Id: 'Cus123',
          Name: 'Obama',
          Email: 'obama@gmail.com',
          Age: 67,
          Image: 'assets/obama-avatar.png'
        },
        {
          Id: 'Cus456',
          Name: 'Kim jong Un',
          Email: 'unun@gmail.com',
          Age: 38,
          Image: 'assets/unun-avatar.png'
        },
        {
          Id: 'Cus789',
          Name: 'Putin',
          Email: 'putin@gmail.com',
          Age: 77,
          Image: 'assets/putin-avatar.png'
        }
      ]
    },
    {
      CustomerTypeId: 2,
      CustomterTypeName: 'Normal',
      Customers: [
        {
          Id: 'Cus000',
          Name: 'Hồ Cẩm Đào',
          Email: 'hodao@gmail.com',
          Age: 16,
          Image: 'assets/hodao-avatar.png'
        },
        {
          Id: 'Cus111',
          Name: 'Tap Can Binh',
          Email: 'binhbinh@gmail.com',
          Age: 67,
          Image: 'assets/binhbinh-avatar.png'
        }
      ]
    }
  ];

  constructor(private http: HttpClient) {}

  getCustomerGroups(): Observable<CustomerGroup[]> {
    return this.http.get<CustomerGroup[]>(this.jsonUrl).pipe(
      catchError((err) => {
        console.warn('HttpClient failed to load /assets/data/customers.json, using fallback data:', err);
        return of(this.defaultCustomerGroups);
      })
    );
  }
}
