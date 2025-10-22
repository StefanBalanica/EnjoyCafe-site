import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api = environment.apiUrl + '/products';

  constructor(private http: HttpClient) {}

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api).pipe(
      catchError(() => {
        const mock: Product[] = [
          { name: 'Espresso', price: 9, description: 'Shot intens, aromă plină.', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=900&h=700&fit=crop&auto=format', category: 'cafea', featured: true },
          { name: 'Cappuccino', price: 12, description: 'Spumă catifelată, echilibru perfect.', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=900&h=700&fit=crop&auto=format', category: 'cafea', featured: true },
          { name: 'Latte', price: 14, description: 'Cremă fină, gust blând.', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=900&h=700&fit=crop&auto=format', category: 'cafea' },
          { name: 'Americano', price: 10, description: 'Cafea lungă și aromată.', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&h=700&fit=crop&auto=format', category: 'cafea' },
          { name: 'Iced Latte', price: 15, description: 'Răcoritoare, cu lapte rece și espresso dublu.', image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=900&h=700&fit=crop&auto=format', category: 'cafea', featured: false },
          { name: 'Matcha Latte', price: 16, description: 'Ceai verde matcha, cremos și vibrant.', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=900&h=700&fit=crop&auto=format', category: 'ceai' },
          { name: 'Cheesecake', price: 18, description: 'Desert fin cu brânză și blat crocant.', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=900&h=700&fit=crop&auto=format', category: 'desert' },
          { name: 'Croissant', price: 8, description: 'Croissant proaspăt cu unt.', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&h=700&fit=crop&auto=format', category: 'snack' }
        ];
        return of(mock);
      })
    );
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.api, product);
  }

  update(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${id}`, product);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
