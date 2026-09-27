# Exercise 13: Json Array Model – Product Event (*)

## Overview
This directory contains the full implementation for **Exercise 13**, demonstrating Angular's component architecture, services, router navigation, dynamic binding, and event handling using a JSON Array product model.

## Features
- **ProductService**: Manages an array of product objects (`p1`, `p2`, `p3`) with attributes: `ProductId`, `ProductName`, `Price`, `Image`.
- **List Component (`ServiceProductImageEventComponent`)**:
  - Displays product items in a structured HTML table with headers: `Product ID`, `Product Name`, `UnitPrice`, `Picture`, `#`.
  - Provides a "Details" link per item that triggers event navigation using Angular's Router: `router.navigate(['service-product-image-event', f.ProductId])`.
- **Detail Component (`ServiceProductImageEventDetailComponent`)**:
  - Subscribes to route parameter changes (`ActivatedRoute.paramMap`) to extract the product ID.
  - Fetches product detail from `ProductService`.
  - Displays full product details and image.
  - Includes a "Go Back" button navigating back to the product list screen.

## Project Structure
```
exercise_13/
├── package.json
├── tsconfig.json
├── README.md
└── src/
    ├── app/
    │   ├── models/
    │   │   └── product.model.ts
    │   ├── services/
    │   │   └── product.service.ts
    │   ├── components/
    │   │   ├── service-product-image-event/
    │   │   │   ├── service-product-image-event.component.ts
    │   │   │   ├── service-product-image-event.component.html
    │   │   │   └── service-product-image-event.component.css
    │   │   └── service-product-image-event-detail/
    │   │       ├── service-product-image-event-detail.component.ts
    │   │       ├── service-product-image-event-detail.component.html
    │   │       └── service-product-image-event-detail.component.css
    │   ├── app.module.ts
    │   ├── app-routing.module.ts
    │   ├── app.component.ts
    │   └── app.component.html
    └── assets/
        ├── h1.png
        ├── h2.png
        └── h3.png
```

## How to Run
1. Navigate to the project root directory or `LearnAngular_K24411E/my-app`.
2. Run `npm start` or `ng serve`.
3. Open `http://localhost:4200/service-product-image-event`.
