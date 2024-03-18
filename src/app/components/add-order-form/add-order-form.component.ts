import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../../Models/order';
import { RestaurantFavesService } from '../../services/restaurant-faves.service';

@Component({
  selector: 'app-add-order-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-order-form.component.html',
  styleUrl: './add-order-form.component.css'
})
export class AddOrderFormComponent {
formOrder:Order = {} as Order
allOrders: Order[] = []
@Output() createEvent = new EventEmitter<Order>();
constructor(private orderService: RestaurantFavesService){}


// CreateEmit(): void {
//   this.createEvent.emit({...this.formOrder})
// }

AddOrder():void {

  this.orderService.addOrder(this.formOrder).subscribe((response:Order) => {
    this.createEvent.emit(response);
  } )
}


}
