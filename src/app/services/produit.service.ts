import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Permet de faire des requêtes HTTP
import { Observable, map } from 'rxjs'; // Gère les données asynchrones

// Définition du modèle Produit (permet d'organiser les données)
export interface Produit {
  id: number;
  nom: string;
  description: string;
  prix: number;
  image: string;
}

// Le service est injectable et disponible dans toute l'application
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url = '/assets/data/produits.json'; // Chemin vers le fichier JSON contenant les produits

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer la liste des produits sous forme de flux de données (Observable)
  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.url);
  }

  // Méthode pour récupérer un produit par ID
  getProduitById(id: number): Observable<Produit | undefined> {
    return this.getProduits().pipe(
      map(produits => produits.find(produit => produit.id === id)) // Retourne le produit correspondant à l'ID
    );
  }
}
