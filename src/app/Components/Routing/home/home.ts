import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  productName: string = "";
  productId: number | null= null;
  
  // active: ActivatedRoute = new ActivatedRoute;
  
  
  constructor(private router: Router) { }
  loadProduct() {
    // this.router.navigate(['product', this.productId]);
    this.router.navigate(['product', this.productId], { queryParams: { pname: this.productName} });
    }
}
