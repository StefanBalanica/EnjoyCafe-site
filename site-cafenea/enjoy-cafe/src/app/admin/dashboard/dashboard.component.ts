import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { AuthService } from '../../core/services/auth.service';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['image', 'name', 'price', 'category', 'featured', 'actions'];
  dataSource: Product[] = [];
  isLoading = false;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.list().subscribe({
      next: (products) => {
        this.dataSource = products;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading products:', error);
        this.snackBar.open('Eroare la încărcarea produselor', 'Închide', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
        this.isLoading = false;
      }
    });
  }

  createProduct(): void {
    this.openProductForm();
  }

  editProduct(product: Product): void {
    this.openProductForm(product);
  }

  deleteProduct(product: Product): void {
    if (confirm(`Ești sigur că vrei să ștergi produsul "${product.name}"?`)) {
      this.productService.remove(product._id!).subscribe({
        next: () => {
          this.snackBar.open('Produs șters cu succes', 'Închide', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.loadProducts();
        },
        error: (error) => {
          console.error('Error deleting product:', error);
          this.snackBar.open('Eroare la ștergerea produsului', 'Închide', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }

  get totalCount(): number {
    return this.dataSource?.length ?? 0;
  }

  get featuredCount(): number {
    return (this.dataSource ?? []).filter(p => !!p.featured).length;
  }

  get averagePrice(): number {
    const list = this.dataSource ?? [];
    if (list.length === 0) return 0;
    const sum = list.reduce((acc, p) => acc + (Number(p.price) || 0), 0);
    return sum / list.length;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.snackBar.open('Te-ai deconectat cu succes', 'Închide', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  private openProductForm(product?: Product): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      data: product,
      width: '600px',
      panelClass: 'ec-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadProducts();
      }
    });
  }
}
