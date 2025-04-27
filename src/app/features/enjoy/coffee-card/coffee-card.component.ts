import { Component , Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';

import { CoffeeService } from 'src/app/services/coffee.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.scss'
})
export class CoffeeCardComponent {
  @Input() coffee: any;
  @Output() onOrderNow = new EventEmitter<any>();
}
