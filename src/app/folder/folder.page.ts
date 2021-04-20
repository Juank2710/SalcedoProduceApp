import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasedatosService } from '../services/basedatos.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  option={
    slidesPerView:3,
    //loop:true, infinito
    spaceBewteen:10
    
  }
  idMayor;
  idAleatorio;
  categorias:any;
  arrayItem:any;
  listaTejido:any;
  listaMadera:any;
  listaGastronomia:any;
  listaTurismo:any;

  constructor(private activatedRoute: ActivatedRoute,private baseDatosService:BasedatosService) { 
    this.getItems();
    
   this.getListaNeegocios()
    
  }

  ngOnInit() {
  }

  getItems(){
    this.baseDatosService.getItems().subscribe(items=>{
      this.arrayItem=items;
      
      for(let elemento of this.arrayItem){
        this.idMayor=Math.max(elemento.id);
      }
      
      //random
      this.idAleatorio=Math.floor(Math.random()* this.idMayor)+1;
      
      this.getCategorias(this.idAleatorio);
    });

  }
  getCategorias(idAleatorio){
    this.baseDatosService.getCategoria(`${idAleatorio}`).subscribe((getCategoria)=>{
      this.categorias=getCategoria;
    })
  }

  getListaNeegocios(){
    
    this.baseDatosService.getListaNegocios('1','1').subscribe((getnegocios)=>{
      this.listaTejido=getnegocios;
    });
    this.baseDatosService.getListaNegocios('1','2').subscribe((getnegocios)=>{
      this.listaMadera=getnegocios;
    });
    this.baseDatosService.getListaNegocios('1','3').subscribe((getnegocios)=>{
      this.listaGastronomia=getnegocios;
    });
    this.baseDatosService.getListaNegocios('3','1').subscribe((getnegocios)=>{
      this.listaTurismo=getnegocios;
    });
  }

}
