import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService, Produit } from '../services/produit.service'; // On importe le service et l'interface Produit
import { CommonModule } from '@angular/common'; // Import de CommonModule

@Component({
  selector: 'app-produits', // Nom du composant à utiliser dans d'autres fichiers HTML
  standalone: true,
  imports: [CommonModule], // Ajout de CommonModule pour *ngFor
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  // produit: Produits[] = []; // Tableau pour stocker les produits récupérés
  produit!: Produit; // ✅ Stocke le produit sélectionné

  constructor(
    private route: ActivatedRoute, //  Récupère l'ID dans l'URL
    private produitService: ProduitService
  ) {}// Injection du service

  ngOnInit(): void {
    // Appelle le service pour récupérer les produits au chargement du composant
    // this.produitService.getProduits().subscribe(data => {
    //   this.produits = data;  // Stocke les produits dans le tableau
    const id = Number(this.route.snapshot.paramMap.get('id')); //  Récupère l'ID dans l'URL
    this.produitService.getProduitById(id).subscribe((data: Produit | undefined) => {   // Appelle la méthode getProduitById avec l'ID
      if (data) { // Vérifie si le produit existe
        this.produit = data; //  Stocke le produit sélectionné
      }
    });
  }
}
