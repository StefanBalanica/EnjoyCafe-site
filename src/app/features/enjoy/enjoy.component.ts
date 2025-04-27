import { Component, OnInit, HostListener } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';
import { CartService } from 'src/app/services/cart.service';

import { CoffeeCardComponent } from 'src/app/features/enjoy/coffee-card/coffee-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enjoy',
  standalone: true,
  imports: [CommonModule, CoffeeCardComponent],
  templateUrl: './enjoy.component.html',
  styleUrl: './enjoy.component.scss'
})
export class EnjoyComponent implements OnInit{
  coffees: any[] = [];
  iceCoffees: any[] = [];
  fresh: any[] = [];
  milkshake: any[] = [];
  showCartPopup: boolean = false; 
  cartItems: any[] = []; 
  total: number = 0; 

  constructor(private coffeeService: CoffeeService, private cartService: CartService) {}
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const triggerHeight = window.innerHeight * 0.4; 

    this.isScrolled = scrollPosition > triggerHeight;
  }
  ngOnInit(): void {
    this.coffees = this.coffeeService.getHotCoffees();
    this.iceCoffees = this.coffeeService.getIceCoffees();
    this.fresh = this.coffeeService.getFresh();
    this.milkshake = this.coffeeService.getMilkshake();
  }

  scrollLeft(container: HTMLElement) {
    container.scrollLeft -= 300;
  }

  scrollRight(container: HTMLElement) {
    container.scrollLeft += 300;
  }
  onCardClick(coffee: any) {
    console.log('Comandă:', coffee.title);
  }
  scrollToHotCoffee() {
    const element = document.getElementById("hotcoffe");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); 
    }
  }
  scrollToIceCoffee() {
    const element = document.getElementById("icecoffe");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); 
    }
  }
  scrollToFresh() {
    const element = document.getElementById("fresh");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); 
    }  
  }
   scrollToMK() {
    const element = document.getElementById("milkshake");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); 
    }  
  }

  showTemporaryPopup: boolean = false;
  temporaryPopupData: any = null;
  
  onOrderNow(coffee: any) {
    this.cartService.addToCart(coffee);
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  
    this.temporaryPopupData = coffee;
    this.showTemporaryPopup = true;
  
    setTimeout(() => {
      const shopButton = document.querySelector('.buttonStyle.shop') as HTMLElement;
      const popup = document.querySelector('.temporary-popup') as HTMLElement;
  
      if (shopButton && popup) {
        const rect = shopButton.getBoundingClientRect();
        popup.style.top = `${rect.bottom + window.scrollY}px`; 
        popup.style.left = `${rect.left + window.scrollX}px`; 
      }
    });
  

    setTimeout(() => {
      this.showTemporaryPopup = false;
    }, 4000);
  }
  toggleCartPopup() {
    this.showCartPopup = !this.showCartPopup;
  }

}
