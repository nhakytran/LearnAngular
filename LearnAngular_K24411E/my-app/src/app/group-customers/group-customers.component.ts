import { Component, OnInit } from '@angular/core';
import { CustomerGroupService } from '../services/customer-group.service';
import { CustomerGroup } from '../models/customer.model';

@Component({
  selector: 'app-group-customers',
  standalone: false,
  templateUrl: './group-customers.component.html',
  styleUrls: ['./group-customers.component.css']
})
export class GroupCustomersComponent implements OnInit {
  public customerGroups: CustomerGroup[] = [];
  public errMessage: string = '';

  constructor(private customerGroupService: CustomerGroupService) {}

  ngOnInit(): void {
    this.customerGroupService.getCustomerGroups().subscribe({
      next: (data) => {
        this.customerGroups = data;
      },
      error: (err) => {
        this.errMessage = 'Error loading customer data: ' + (err.message || err);
      }
    });
  }
}
