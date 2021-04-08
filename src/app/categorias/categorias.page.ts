import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasedatosService } from '../services/basedatos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  categorias:any;
  idItem;
  constructor( private route:ActivatedRoute,private baseDatosService:BasedatosService) { 
    this.idItem=this.route.snapshot.paramMap.get('itemId')
    this.getCaterogias(this.idItem);
  }

  ngOnInit() {
  }
  getCaterogias(idItem){
    this.baseDatosService.getCategoria(idItem).subscribe((getCategoria)=>{
      this.categorias=getCategoria;
    })
  }

}
