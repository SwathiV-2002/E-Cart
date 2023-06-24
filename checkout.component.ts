import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private router:Router){}
  ngOnInit():void{

  }
  submit()
  {
    window.alert("ORDER CONFIRMED AND WILL BE DELIVERED WITHIN 1 WEEK");
    this.router.navigate(['products']);
  }

}
