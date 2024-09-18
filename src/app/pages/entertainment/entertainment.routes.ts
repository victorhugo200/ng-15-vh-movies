import { Routes } from "@angular/router";

export const ENTERTAINMENT_ROUTES: Routes = [
  {
    path: 'filmes',
    children: [
      {
        path: 'populares',
        data: {
          title: 'Filmes Populares'
        }
      }
    ]
  }
];
