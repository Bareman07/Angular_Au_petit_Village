import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import de CommonModule
import { RouterModule } from '@angular/router'; // Import du RouterModule
import { ProduitService, Produit } from '../services/produit.service'; // On importe le service et l'interface Produit

@Component({
  selector: 'app-accueil',
  standalone: true, // Important pour Angular sans app.module.ts
  imports: [CommonModule, RouterModule], // Ajout de RouterModule // Ajout du CommonModule pour utiliser | currency
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  produits: Produit[] = []; // Tableau pour stocker les produits récupérés

  constructor(private produitService: ProduitService) {} // Injection du service

  ngOnInit(): void {
    // Appelle le service pour récupérer les produits au chargement du composant
    this.produitService.getProduits().subscribe(data => {
      this.produits = data; // Stocke les produits dans le tableau
    });
  }
}
