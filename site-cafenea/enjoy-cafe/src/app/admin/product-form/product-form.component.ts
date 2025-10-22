import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  productForm: FormGroup;
  isSubmitting = false;

  categories = [
    { value: 'cafea', label: 'Cafea' },
    { value: 'ceai', label: 'Ceai' },
    { value: 'desert', label: 'Desert' },
    { value: 'snack', label: 'Snack' },
    { value: 'altceva', label: 'Altceva' }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product | null,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductFormComponent>,
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(1)]],
      description: [''],
      image: ['', Validators.required],
      category: ['cafea', Validators.required],
      featured: [false]
    });

    if (this.data) {
      this.productForm.patchValue(this.data);
    }
  }

  public onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.isSubmitting = true;
      const formValue = this.productForm.value as Product;

      const request = this.data
        ? this.productService.update(this.data._id!, formValue)
        : this.productService.create(formValue);

      request.subscribe({
        next: () => {
          this.snackBar.open(
            this.data ? 'Produs actualizat cu succes' : 'Produs creat cu succes',
            'Închide',
            { duration: 3000, panelClass: ['success-snackbar'] }
          );
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.error('Error saving product:', error);
          this.snackBar.open('Eroare la salvarea produsului', 'Închide', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
          this.isSubmitting = false;
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.productForm.controls).forEach(key => {
      const control = this.productForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.productForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} este obligatoriu`;
      }
      if (field.errors['minlength']) {
        const minLength = field.errors['minlength'].requiredLength;
        return `${this.getFieldLabel(fieldName)} trebuie să aibă cel puțin ${minLength} caractere`;
      }
      if (field.errors['min']) {
        return 'Prețul trebuie să fie cel puțin 1 leu';
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Numele',
      price: 'Prețul',
      description: 'Descrierea',
      image: 'Imaginea',
      category: 'Categoria'
    };
    return labels[fieldName] || fieldName;
  }
}
