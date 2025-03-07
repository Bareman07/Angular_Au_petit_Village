import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // Importation d'HttpClient
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; // Importation de la locale française

// Enregistre les paramètres régionaux pour la France
registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()), // Activation du routage
    provideHttpClient() // Ajout d'HttpClient pour les requêtes HTTP
  ]
};
