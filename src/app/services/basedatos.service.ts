import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore,AngularFirestoreCollection } from "@angular/fire/firestore";
@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  
  private Collections: AngularFirestoreCollection;
  private items: Observable<any>;
  private Categorias: Observable<any>;
  private listaNegocios: Observable<any>;
  private catalogo: Observable<any>;
  private slider: Observable<any>;
  constructor(private db:AngularFirestore) { 

    this.Collections = this.db.collection('items');

    this.items = this.Collections.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

    

  }
  
  getItems(){
    return this.items;
  }
  
  getCategoria(idItem:string){
    this.Collections = this.db.collection('items').doc(idItem).collection('categorias');
    this.Categorias = this.Collections.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

    return this.Categorias
  }

  getListaNegocios(idItem:string,idCategoria:string){
    this.Collections = this.db.collection('items').doc(idItem).collection('categorias').doc(idCategoria).collection('listaNegocios');
    this.listaNegocios=this.Collections.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
    return this.listaNegocios

  }

  getCatalogo(idItem:string,idCategoria:string,idNegocio:string){
    this.Collections = this.db.collection('items').doc(idItem).collection('categorias').doc(idCategoria).collection('listaNegocios').doc(idNegocio).collection('catalogo');
    this.catalogo=this.Collections.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

    return this.catalogo
  }

  getSlider(idItem:string,idCategoria:string,idNegocio:string){
    this.Collections = this.db.collection('items').doc(idItem).collection('categorias').doc(idCategoria).collection('listaNegocios').doc(idNegocio).collection('slider');
    this.slider=this.Collections.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

    return this.slider
  }

}
