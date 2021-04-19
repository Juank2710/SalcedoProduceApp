import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {  BasedatosService} from "./services/basedatos.service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  items:any;
  public subscribe:any;
  constructor( private baseDatosService:BasedatosService,public platform:Platform) {
    this.subscribe=this.platform.backButton.subscribeWithPriority(666666,()=>{
      if(this.constructor.name=="HomePage")
      {
        if(window.confirm("¿Desea salir?"))
        {platform
          navigator["app"].exitApp();
        }
      }
    });

    this.recuperarItems();
  }
  
  recuperarItems(){
    this.baseDatosService.getItems().subscribe((item)=>{
      this.items=item;
    })
  }
  
   
  
}
