import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-list-component',
  standalone: false,
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
  products:Product[]=[
    {id:1,name:"Coca",price:15, image_link:"https://png.pngtree.com/png-vector/20231115/ourmid/pngtree-coca-cola-bottled-drink-isolated-png-image_10465016.png"},
    {id:2,name:"Pepsi",price:10, image_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSc2UVJ8PAgO6kdf2BUvWCi4zsCaSUZtuPO6dk-G6OWqYskNG9K_b1Fkg&s=10"},
    {id:3,name:"Redbull",price:20,image_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQ3RnQ0isz5uEA3OosybJzh3HjkzqN__fYkFMZZJVKmmNC0zcHjc9Wuw&s=10"},
    {id:4,name:"Aqua",price:17, image_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRdkVISUKak_wTfKNJM_ZMe3PwyeO4dy5SBxo9_3_feobEK5zimpak4w&s=10"},
    {id:5,name:"Lavie",price:12, image_link:"https://sonhawater.com/wp-content/uploads/2019/09/lavie-500ml.png"}
  ];
}
