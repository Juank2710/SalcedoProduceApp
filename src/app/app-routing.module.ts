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
      },
      {
        path:':itemId/:idCatalogo/:idNegocio',
        loadChildren: () => import('./negocio/negocio.module').then( m => m.NegocioPageModule)
      }
    ],
    
  },
  {
    path: 'catalogo',
    children:[
      {
        path:':itemId/:idCatalogo/:idNegocio',
        loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule)
      }
    ]
    
  }

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
