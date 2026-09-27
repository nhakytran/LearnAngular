# Exercise 18: Json Array Model – Group Customers (*)

## Overview
This directory contains the complete implementation for **Exercise 18**, demonstrating how to load customer group data from an external JSON file (`assets/data/customers.json`) using Angular's `HttpClient` service and display grouped data in a tabular format.

## Features
- **customers.json Data**: Contains customer groups (`1 - VIP`, `2 - Normal`) with customer records (Obama, Kim Jong Un, Putin, Hu Jintao, Xi Jinping).
- **CustomerGroupService**: Leverages `HttpClient` (`http.get<CustomerGroup[]>('assets/data/customers.json')`) to asynchronously retrieve JSON array models.
- **Group Customers Component (`GroupCustomersComponent`)**:
  - Displays customer group headers spanning across table columns (`1 - VIP`, `2 - Normal`).
  - Iterates through group customer arrays displaying `Id`, `Name`, `Email`, `Age`, and avatar photo (`#`).

## Project Structure
```
exercise_18/
├── package.json
├── tsconfig.json
├── README.md
└── src/
    ├── app/
    │   ├── models/
    │   │   └── customer.model.ts
    │   ├── services/
    │   │   └── customer-group.service.ts
    │   ├── components/
    │   │   └── group-customers/
    │   │       ├── group-customers.component.ts
    │   │       ├── group-customers.component.html
    │   │       └── group-customers.component.css
    │   ├── app.module.ts
    │   ├── app.component.ts
    │   └── app.component.html
    └── assets/
        ├── data/
        │   └── customers.json
        └── avatars/
            ├── obama-avatar.png
            ├── unun-avatar.png
            ├── putin-avatar.png
            ├── hodao-avatar.png
            └── binhbinh-avatar.png
```

## How to Run
1. Navigate to the project root directory or `LearnAngular_K24411E/my-app`.
2. Run `npm start` or `ng serve`.
3. Open `http://localhost:4200/group-customers`.
