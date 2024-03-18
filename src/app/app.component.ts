import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OrderHistoryComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEndRestaurant';
}
