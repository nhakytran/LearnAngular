# Exercise 14: Json Array Model – Product - Catalog

## Overview
This directory contains the complete implementation for **Exercise 14**, demonstrating hierarchical data rendering using nested `ngFor` directives in Angular.

## Features
- **CatalogService**: Stores categories (`cate1: nuoc ngot`, `cate2: Bia`) each containing a nested list of product items (`p1..p6`) with attributes: `ProductId`, `ProductName`, `Price`, `Image`.
- **Catalog Component (`ServiceProductCatalogComponent`)**:
  - Uses an outer `ngFor` to iterate over categories.
  - Renders category metadata headers (`Ma Danh Muc`, `Ten Danh Muc`).
  - Uses an inner `ngFor` to iterate over products inside each category.
  - Displays product details (`Ma San Pham`, `Ten San Pham`, `Gia San Pham`, `Picture`).

## Project Structure
```
exercise_14/
├── package.json
├── tsconfig.json
├── README.md
└── src/
    ├── app/
    │   ├── models/
    │   │   └── catalog.model.ts
    │   ├── services/
    │   │   └── catalog.service.ts
    │   ├── components/
    │   │   └── service-product-catalog/
    │   │       ├── service-product-catalog.component.ts
    │   │       ├── service-product-catalog.component.html
    │   │       └── service-product-catalog.component.css
    │   ├── app.module.ts
    │   ├── app.component.ts
    │   └── app.component.html
    └── assets/
        ├── h1.png ... h6.png
```

## How to Run
1. Navigate to the project root directory or `LearnAngular_K24411E/my-app`.
2. Run `npm start` or `ng serve`.
3. Open `http://localhost:4200/service-product-catalog`.
