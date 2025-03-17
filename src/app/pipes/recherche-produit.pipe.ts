import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../services/produit.service';

@Pipe({
  name: 'rechercheProduit'
})
export class RechercheProduitPipe implements PipeTransform {

  transform(produits: Produit[], searchTerm: string): Produit[] {
    if (!produits || !searchTerm) {
      return produits;  // Retourne tous les produits si rien n'est recherché
    }
    // Filtre les produits dont le nom contient le terme recherché (insensible à la casse)
    return produits.filter(produit => produit.nom.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
