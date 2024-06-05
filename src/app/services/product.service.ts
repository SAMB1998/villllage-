import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Figurine Astérix',
      price: 30,
      description: 'Astérix le Gaulois',
      imageUrl: 'assets/images/asterix.jpg'
    },
    {
      id: 2,
      name: 'Figurine Obélix',
      price: 35,
      description: 'Obélix le livreur de menhirs',
      imageUrl: 'assets/images/obelix.jpg'
    },
    // Ajoutez plus de produits selon le besoin
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}

