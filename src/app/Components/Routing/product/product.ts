import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {

  productId: number = 0;
  productName: string = "";

  // active: ActivatedRoute = new ActivatedRoute;


  constructor(private active: ActivatedRoute) { }


  ngOnInit() {

    this.active.queryParams.subscribe( (data) => {
      this.productName = data['pname'];
    })

    this.active.params.subscribe( (params)  => {
        this.productId = params['id'];
    })

    
    
    // this.productId = this.active.snapshot.params['id'];
    // console.log(this.productId);
  } 
}
