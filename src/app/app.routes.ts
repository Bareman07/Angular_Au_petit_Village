// Importation de l'interface `Routes` d'Angular Router, utilisée pour définir les routes de l'application
import { Routes } from '@angular/router';

// Importation des différents composants qui seront utilisés pour chaque route
import { AccueilComponent } from './accueil/accueil.component'; // Composant pour la page d'accueil
import { AboutComponent } from './about/about.component'; // Composant pour la page "À propos"
import { ProduitComponent } from './produit/produit.component'; // Composant pour la page détail du produit
import { ContactComponent } from './contact/contact.component'; // Composant pour la page de contact

// Définition des routes de l'application
export const routes: Routes = [
    { path: '', component: AccueilComponent },// Route pour la page d'accueil ('/'). Affiche `accueilComponent` lorsque l'utilisateur accède à la racine du site.
    { path: 'about', component: AboutComponent },// Route pour la page "À propos" ('/about'). Affiche `AboutComponent`.
    { path: 'contact', component: ContactComponent },// Route pour la page de contact ('/contact'). Affiche `ContactComponent`.
    { path: 'produit/:id', component: ProduitComponent },// Route dynamique pour la page de détail d'un produit ('/produit/:id'). Le `:id` est un paramètre dynamique qui permet d'afficher le détail d'un produit spécifique en fonction de son ID.
    // Route de secours : si l'utilisateur accède à une URL non définie dans l'application, il est automatiquement redirigé vers la page d'accueil.
    { path: '**', redirectTo: '', pathMatch: 'full' } // `pathMatch: 'full'` signifie que toute route non définie doit correspondre entièrement.
];