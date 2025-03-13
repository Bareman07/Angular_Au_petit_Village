import { Pipe, PipeTransform } from '@angular/core';

type Produit = { 
  id: number;
  nom: string; 
  prix: number;
  description: string; // Ajoute la description
  image: string; 
}; // Définition simple du produit

// Déclaration du pipe avec le nom "trier"
@Pipe({
  name: 'trier',
  pure: false // Ajout pour garantir la mise à jour dynamique
})

export class TrierPipe implements PipeTransform {
  /**
   * Transforme la liste des produits en une liste triée selon le critère choisi.
   * @param produits - Liste des produits à trier.
   * @param critere - Critère de tri ('nomAsc', 'nomDesc', 'prixAsc', 'prixDesc').
   * @returns La liste des produits triée.
   */
  transform(produits: Produit[], critere: string): Produit[] {
    console.log("Données après tri :", produits);
    // Si la liste est vide ou si aucun critère n'est fourni, on retourne la liste telle quelle.
    if (!produits || !critere) {
      return produits;
    }

    // On trie la liste des produits selon le critère sélectionné.
    return produits.sort((a, b) => {
      switch (critere) {
        case 'nomAsc': // Tri par nom (A → Z)
          return a.nom.localeCompare(b.nom);
        case 'nomDesc': // Tri par nom (Z → A)
          return b.nom.localeCompare(a.nom);
        case 'prixAsc': // Tri par prix croissant
          return a.prix - b.prix;
        case 'prixDesc': // Tri par prix décroissant
          return b.prix - a.prix;
        default:
          return 0; // Aucun tri appliqué
      }
    });
  }
}
