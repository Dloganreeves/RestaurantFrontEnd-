import { Component } from '@angular/core';
import { RestaurantFavesService } from '../../services/restaurant-faves.service';
import { Order } from '../../Models/order';
import { AddOrderFormComponent } from '../add-order-form/add-order-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [AddOrderFormComponent,FormsModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent { 
  allOrders: Order[] = [];
  FormOrder: Order = {} as Order;
  constructor(private orderService: RestaurantFavesService) {}

ngOnInit() {
  this.orderService.GetAll().subscribe((response: Order[]) => {
    this.allOrders = response; 
  })
}
AddOrder(o: Order):void {
  this.allOrders.push(o);
}

deleteOrder(o: Order) {
  let index: number = this.allOrders.findIndex(x => x == o)
  this.allOrders.splice(index,1);
  this.orderService.DeleteOrder(o).subscribe()
}
}
