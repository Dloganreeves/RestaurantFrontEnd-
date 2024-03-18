import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantFavesService {

  constructor(private http: HttpClient) { }

  url: string = "https://localhost:7200/api"

  GetAll():Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}/Order`)
  }

  addOrder(o: Order):Observable<Order> {
    return this.http.post<Order>(`${this.url}/Order`, o)
    
  }

  DeleteOrder(o:Order):Observable<Order> {
    return this.http.delete<Order> (`${this.url}/Order/${o.id}`)
  }
}
