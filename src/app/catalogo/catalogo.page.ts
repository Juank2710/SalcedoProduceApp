import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasedatosService } from '../services/basedatos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  catalogo:any;
  idItem;
  idCategoria;
  idNegocio;
  constructor(private route:ActivatedRoute,private baseDatosService:BasedatosService) { 
    this.idItem=this.route.snapshot.paramMap.get('itemId');
    this.idCategoria=this.route.snapshot.paramMap.get('idCatalogo');
    this.idNegocio=this.route.snapshot.paramMap.get('idNegocio');
    this.getCatlogo(this.idItem,this.idCategoria,this.idNegocio)
  }

  ngOnInit() {
  }
  getCatlogo(idItem,idCategoria,idNegocio){
    this.baseDatosService.getCatalogo(idItem,idCategoria,idNegocio).subscribe((getCatalogo)=>{
      this.catalogo=getCatalogo;
    })
  }

}
