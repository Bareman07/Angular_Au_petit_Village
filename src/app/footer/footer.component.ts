import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Permet d'utiliser routerLink dans le template

@Component({
  selector: 'app-footer',
  imports: [RouterModule], // Importation du RouterModule pour permettre l'utilisation de routerLink
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
