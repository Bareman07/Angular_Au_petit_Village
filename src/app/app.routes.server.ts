import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // {
  //   path: 'produit/:id',
  //   renderMode: RenderMode.SSR // Désactive la prérenderisation pour cette page
  // },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
