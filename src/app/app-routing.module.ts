import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'angular',
    loadChildren: () => import('./pages/angular/angular.module').then( m => m.AngularPageModule)
  },
  {
    path: 'animals',
    loadChildren: () => import('./pages/animals/animals.module').then( m => m.AnimalsPageModule)
  },
  {
    path: 'hello/:name',
    loadChildren: () => import('./pages/hello/hello.module').then( m => m.HelloPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'note-list',
    loadChildren: () => import('./pages/notes/note-list/note-list.module').then( m => m.NoteListPageModule)
  },
  {
    path: 'note-form',
    loadChildren: () => import('./pages/notes/note-form/note-form.module').then( m => m.NoteFormPageModule)
  },
  {
    path: 'note-form/:id',
    loadChildren: () => import('./pages/notes/note-form/note-form.module').then( m => m.NoteFormPageModule)
  },
  {
    path: 'note-details/:id',
    loadChildren: () => import('./pages/notes/note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
