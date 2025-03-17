import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import de CommonModule
import { RouterModule } from '@angular/router'; // Import du RouterModule
import { ProduitService, Produit } from '../services/produit.service'; // On importe le service et l'interface Produit
import { FormsModule } from '@angular/forms';
import { TrierPipe } from '../pipes/trier.pipe'; // Vérifie le chemin du fichier
import { RechercheProduitPipe } from '../pipes/recherche-produit.pipe'; // Import du pipe de recherche


@Component({
  selector: 'app-accueil',
  standalone: true, // Important pour Angular sans app.module.ts
  imports: [CommonModule, RouterModule, FormsModule, TrierPipe, RechercheProduitPipe], // Ajout de RouterModule // Ajout du CommonModule pour utiliser | currency
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent {
  produits: Produit[] = []; // Tableau pour stocker les produits récupérés
  produitsFiltres: Produit[] = []; // Liste après filtrage
  critereTri: string = 'nomAsc'; // Tri par défaut (nom A-Z)
  searchTerm: string = ''; // Initialisation du champ de recherche
  produitsAffiches: Produit[] = []; // Liste des produits affichés sur la page actuelle
  pageActuelle = 1; // Numéro de la page en cours
  articlesParPage = 3; // Nombre de produits affichés par page (modifiable)

  constructor(private produitService: ProduitService) {} // Injection du ProduitService

  ngOnInit(): void {
    // Lors du chargement du composant, on récupère les produits
    this.produitService.getProduits().subscribe(data => {
      this.produits = data; // Stocke les produits récupérés dans la variable produits
      this.appliquerRechercheEtTri(); // Applique recherche et tri dès que les produits sont récupérés
    });
  }

  // Appliquer la recherche, le tri et la pagination
  appliquerRechercheEtTri() {
    // 1. Appliquer la recherche
    this.produitsFiltres = this.produits.filter(produit =>
      produit.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // 2. Appliquer le tri
    const trierPipe = new TrierPipe();
    const produitsTries = trierPipe.transform(this.produitsFiltres, this.critereTri);

    // 3. Appliquer la pagination
    this.appliquerPagination(produitsTries);
  }

  // Méthode pour appliquer la pagination avec les produits triés
  appliquerPagination(produits: Produit[]) {
    this.produitsAffiches = produits.slice(
      (this.pageActuelle - 1) * this.articlesParPage,
      this.pageActuelle * this.articlesParPage
    );
  }

  // Méthode pour changer de page et réappliquer la pagination
  changerPage(sens: number) {
    const nouvellePage = this.pageActuelle + sens; // Changer la page (précédente ou suivante)
    if (nouvellePage > 0 && nouvellePage <= this.totalPages) { // Vérifie si la page est valide
      this.pageActuelle = nouvellePage;
      this.appliquerPagination(this.produitsFiltres); // Réapplique la pagination avec les produits filtrés
    }
  }

  // Calcul du nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.produitsFiltres.length / this.articlesParPage); // Division pour calculer le nombre de pages
  }
}
