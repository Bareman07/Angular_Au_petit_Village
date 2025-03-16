import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  telephone: string = '';
  message: string = '';

  // Fonction appelée à la soumission du formulaire
  envoyerMessage() {
    // Affiche les infos dans la console
    console.log('Message envoyé :', {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      telephone: this.telephone,
      message: this.message
    });

    // Réinitialiser le formulaire après envoi
    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.telephone = '';
    this.message = '';
  }
}