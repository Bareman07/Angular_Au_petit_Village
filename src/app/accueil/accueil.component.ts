import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import de CommonModule
import { RouterModule } from '@angular/router'; // Import du RouterModule
import { ProduitService, Produit } from '../services/produit.service'; // On importe le service et l'interface Produit
import { FormsModule } from '@angular/forms';
import { TrierPipe } from '../pipes/trier.pipe'; // Vérifie le chemin du fichier


@Component({
  selector: 'app-accueil',
  standalone: true, // Important pour Angular sans app.module.ts
  imports: [CommonModule, RouterModule, FormsModule, TrierPipe], // Ajout de RouterModule // Ajout du CommonModule pour utiliser | currency
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  produits: Produit[] = []; // Tableau pour stocker les produits récupérés
  critereTri: string = 'nomAsc'; // Tri par défaut (nom A-Z)
  produitsAffiches: Produit[] = []; // Liste des produits affichés sur la page actuelle
  pageActuelle = 1; // Numéro de la page en cours
  articlesParPage = 3; // Nombre de produits affichés par page (modifiable)

  constructor(private produitService: ProduitService) {} // Injection du service

  ngOnInit(): void {
    // Appelle le service pour récupérer les produits au chargement du composant
    this.produitService.getProduits().subscribe(data => {
      console.log("Produits récupérés :", data); // Ajout du log
      this.produits = data; // Stocke les produits dans le tableau
      // this.updateProduitsAffiches(); // Mise à jour des produits affichés
      this.appliquerTriEtPagination(); // Appliquer le tri et la pagination
    });
  }

   // Appliquer le tri puis la pagination
  appliquerTriEtPagination() {
    // Utiliser le pipe TrierPipe pour trier les produits avant de les afficher
    const produitsTries = new TrierPipe().transform(this.produits, this.critereTri);

    // Appliquer la pagination sur les produits triés
    this.produitsAffiches = produitsTries.slice((this.pageActuelle - 1) * this.articlesParPage, this.pageActuelle * this.articlesParPage);
  }

  // Fonction pour changer la page et mettre à jour l'affichage
  changerPage(sens: number) {
    const nouvellePage = this.pageActuelle + sens;
    if (nouvellePage > 0 && nouvellePage <= this.totalPages) {
      this.pageActuelle = nouvellePage;
      this.appliquerTriEtPagination(); // Réappliquer tri et pagination
    }
  }

  // Calcul du nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.produits.length / this.articlesParPage);
  }
}
