import { Component, OnInit } from '@angular/core';
import { ThiscartService } from '../thiscart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartComponent implements OnInit {
  public product:any=[];
  public grandtotal !:number;
  constructor(private cartpageservice :ThiscartService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   this.cartpageservice.getproducts()
  //   .subscribe((res: any)=>{
  //     this.product=res;
  //     this.grandtotal=this.cartpageservice.gettotalprice();
  //   })
  // }
  // removeitem(item:any){
  //   this.cartpageservice.removecartitem(item);
  // }
  // emptycart(){
  //   this.cartpageservice.removeallcart();
  // }
  

}