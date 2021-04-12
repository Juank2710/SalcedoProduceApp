import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasedatosService } from '../services/basedatos.service';
@Component({
  selector: 'app-lista-negocios',
  templateUrl: './lista-negocios.page.html',
  styleUrls: ['./lista-negocios.page.scss'],
})
export class ListaNegociosPage implements OnInit {
  categorias:any={
    id: "",
    imagenCategoria: "",
    nombreCategoria: "",
    nombreImagen: "",
  };
  
  listaNegocios:any;
  idItem;
  idCategoria;
  constructor(private route:ActivatedRoute,private baseDatosService:BasedatosService) { 
    this.idItem=this.route.snapshot.paramMap.get('itemId');
    this.idCategoria=this.route.snapshot.paramMap.get('idCatalogo');
    this.getListaNegocios(this.idItem,this.idCategoria);
    this.getCaterogia(this.idItem,this.idCategoria);
  }

  ngOnInit() {
  }

  getListaNegocios(idItem,idCategoria){
    this.baseDatosService.getListaNegocios(idItem,idCategoria).subscribe((getNegocios)=>{
      this.listaNegocios=getNegocios;
    })
  }

  getCaterogia(idItem,idCategoria){
    this.baseDatosService.getCategoriaNombre(idItem,idCategoria).subscribe((getCategoria)=>{
      this.categorias=getCategoria;
    })
  }
}
