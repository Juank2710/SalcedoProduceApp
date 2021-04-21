import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { BasedatosService } from 'src/app/services/basedatos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  enlaces:any;
  constructor(private baseDatosService:BasedatosService,private browser:InAppBrowser) { 
    this.getEnlaces()
  }

  ngOnInit() {}

  getEnlaces(){
    this.baseDatosService.getEnlaces().subscribe(enlaces=>{
      this.enlaces=enlaces;
      });
  }
  openUrl(url:string,target:string){
    this.browser.create(url,target);
  }
}
