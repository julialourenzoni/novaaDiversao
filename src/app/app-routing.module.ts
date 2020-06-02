import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'blood-shot',
    loadChildren: () => import('./filmes/blood-shot/blood-shot.module').then( m => m.BloodShotPageModule)
  },
  {
    path: 'rick-and-morty',
    loadChildren: () => import('./series/rick-and-morty/rick-and-morty.module').then( m => m.RickAndMortyPageModule)
  },
  {
    path: 'elite',
    loadChildren: () => import('./series/elite/elite.module').then( m => m.ElitePageModule)
  },
  {
    path: 'gravity-falls',
    loadChildren: () => import('./desenhos/gravity-falls/gravity-falls.module').then( m => m.GravityFallsPageModule)
  },
  {
    path: 'totally-spies',
    loadChildren: () => import('./desenhos/totally-spies/totally-spies.module').then( m => m.TotallySpiesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
