import { Component, OnInit } from '@angular/core';
import { BasedatosService } from '../services/basedatos.service';
import { Platform } from '@ionic/angular';

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
  public subscribe:any;
  constructor(private baseDatosService:BasedatosService,public platform:Platform) { 
    this.subscribe=this.platform.backButton.subscribeWithPriority(666666,()=>{
      if(this.constructor.name=="HomePage")
      {
        if(window.confirm("¿Desea salir?"))
        {platform
          navigator["app"].exitApp();
        }
      }
    });
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
