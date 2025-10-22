import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  products: Product[] = [];
  search = '';
  selectedCategory = 'toate';
  sortBy = '';

  categories = [
    { value: 'toate', label: 'Toate' },
    { value: 'coffee', label: 'Coffee' },
    { value: 'extra', label: 'Extra' },
    { value: 'iced', label: 'Iced Coffee' },
    { value: 'cocktail', label: 'Cocktail Coffee' },
    { value: 'milkshake', label: 'Milkshake' },
    { value: 'smoothie', label: 'Smoothies' },
    { value: 'frappe', label: 'Frappe' },
    { value: 'lemonade', label: 'Lemonade' },
    { value: 'fresh', label: 'Fresh' }
  ];

  categoryGroups = [
    {
      name: 'Coffee',
      categories: ['coffee'],
      title: 'Cafea',
      icon: '☕'
    },
    {
      name: 'Extra',
      categories: ['extra'],
      title: 'Extra',
      icon: '➕'
    },
    {
      name: 'Iced Coffee',
      categories: ['iced'],
      title: 'Iced Coffee',
      icon: '🧊'
    },
    {
      name: 'Cocktail Coffee',
      categories: ['cocktail'],
      title: 'Cocktail Coffee',
      icon: '🍸'
    },
    {
      name: 'Milkshake',
      categories: ['milkshake'],
      title: 'Milkshake',
      icon: '🥤'
    },
    {
      name: 'Smoothies',
      categories: ['smoothie'],
      title: 'Smoothies',
      icon: '🥤'
    },
    {
      name: 'Frappe',
      categories: ['frappe'],
      title: 'Frappe',
      icon: '🧊'
    },
    {
      name: 'Lemonade',
      categories: ['lemonade'],
      title: 'Lemonade',
      icon: '🍋'
    },
    {
      name: 'Fresh',
      categories: ['fresh'],
      title: 'Fresh',
      icon: '🍹'
    }
  ];

  sortOptions = [
    { value: '', label: 'Fără sortare' },
    { value: 'price_asc', label: 'Preț ↑' },
    { value: 'price_desc', label: 'Preț ↓' },
    { value: 'name_asc', label: 'Nume A-Z' }
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.list().subscribe({
      next: (products) => {
        this.products = products;
        if (!this.products || this.products.length === 0) {
          this.products = [
            { name: 'Espresso', price: 9, description: 'Shot intens, aromă plină.', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&h=400&fit=crop', category: 'cafea', featured: true },
            { name: 'Cappuccino', price: 12, description: 'Spumă catifelată, echilibru perfect.', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop', category: 'cafea', featured: true },
            { name: 'Latte', price: 14, description: 'Cremă fină, gust blând.', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=400&fit=crop', category: 'cafea' },
            { name: 'Americano', price: 10, description: 'Cafea lungă și aromată.', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop', category: 'cafea' }
          ];
        }
      },
      error: (error) => {
        console.error('Error loading products:', error);
        this.products = [
          { name: 'Espresso', price: 9, description: 'Shot intens, aromă plină.', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&h=400&fit=crop', category: 'cafea', featured: true },
          { name: 'Cappuccino', price: 12, description: 'Spumă catifelată, echilibru perfect.', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop', category: 'cafea', featured: true },
          { name: 'Latte', price: 14, description: 'Cremă fină, gust blând.', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=400&fit=crop', category: 'cafea' },
          { name: 'Americano', price: 10, description: 'Cafea lungă și aromată.', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop', category: 'cafea' }
        ];
      }
    });
  }

  get filteredProducts(): Product[] {
    let filtered = [...this.products];

    // Filter by category
    if (this.selectedCategory !== 'toate') {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    // Filter by search
    if (this.search) {
      const searchLower = this.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }

    // Sort
    switch (this.sortBy) {
      case 'price_asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name_asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }

  get groupedProducts(): { group: any, products: Product[] }[] {
    const filtered = this.filteredProducts;
    
    if (this.selectedCategory !== 'toate') {
      // If a specific category is selected, return all products in one group
      return [{
        group: this.categoryGroups.find(g => g.categories.includes(this.selectedCategory)) || 
               { title: this.selectedCategory, icon: '🍽️' },
        products: filtered
      }];
    }

    // Group products by category groups
    return this.categoryGroups.map(group => ({
      group,
      products: filtered.filter(product => group.categories.includes(product.category))
    })).filter(group => group.products.length > 0);
  }

  clearFilters(): void {
    this.search = '';
    this.selectedCategory = 'toate';
    this.sortBy = '';
  }
}
