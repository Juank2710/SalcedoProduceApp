import { Component } from '@angular/core';
import {  BasedatosService} from "./services/basedatos.service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  items:any;
 
  constructor( private baseDatosService:BasedatosService) {

    this.recuperarItems();
  }
  
  recuperarItems(){
    this.baseDatosService.getItems().subscribe((item)=>{
      this.items=item;
    })
  }
  
   
  
}
