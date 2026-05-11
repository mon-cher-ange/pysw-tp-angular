import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  added: boolean;
}

@Component({
  selector: 'app-punto2',
  imports: [CurrencyPipe],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2 {
  shoppingCart: Product[] = [];
  products: Product[] = [
    {
      name: 'Auriculares Inalámbricos ProSound X200',
      description:
        'Auriculares Bluetooth con cancelación de ruido, batería de larga duración y estuche de carga rápida. Ideales para música, trabajo y viajes.',
      image: 'images/image_placeholder_01.jpg',
      price: 32500.5,
      quantity: 1,
      added: false,
    },
    {
      name: 'Mochila Urbana NeoPack 25L',
      description:
        'Mochila resistente al agua con compartimento acolchado para notebook, bolsillos organizadores y diseño ergonómico para uso diario.',
      image: 'images/image_placeholder_02.jpg',
      price: 18900.67,
      quantity: 1,
      added: false,
    },
    {
      name: 'Smartwatch FitLife S3',
      description:
        'Reloj inteligente con monitor de ritmo cardíaco, seguimiento deportivo, notificaciones y pantalla táctil de alta resolución.',
      image: 'images/image_placeholder_03.jpg',
      price: 45000.75,
      quantity: 1,
      added: false,
    },
    {
      name: 'Botella Térmica Acero 750ml',
      description:
        'Botella de acero inoxidable con doble pared, mantiene bebidas frías por 24 horas y calientes por 12. Perfecta para actividades al aire libre.',
      image: 'images/image_placeholder_04.jpg',
      price: 9800.99,
      quantity: 1,
      added: false,
    },
  ];

  addProductToShoppingCart(product: Product): void {
    if (!product.added) {
      product.added = true;
      this.shoppingCart.push(product);
    }
  }

  decreaseQuantity(product: Product): void {
    product.quantity -= 1;
  }

  increaseQuantity(product: Product): void {
    product.quantity += 1;
  }

  calculateSubtotal(product: Product): number {
    return product.price * product.quantity;
  }

  totalPayment(): number {
    return this.shoppingCart.reduce((total: number, item): number => total + (item.price * item.quantity), 0);
  }
}
