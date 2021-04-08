import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    children:[
      {
        path:'',
        loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
      },
      {
        path:':itemId',
        loadChildren: () => import('./categorias/categorias.module').then ( m => m.CategoriasPageModule)
      },
      {
        path:':itemId/:idCatalogo',
        loadChildren: () => import('./lista-negocios/lista-negocios.module').then( m => m.ListaNegociosPageModule)
      }
    ],
    
  }
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
