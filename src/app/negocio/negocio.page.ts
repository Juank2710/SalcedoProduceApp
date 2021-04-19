import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasedatosService } from '../services/basedatos.service';
@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.page.html',
  styleUrls: ['./negocio.page.scss'],
})
export class NegocioPage implements OnInit {
 
    slideOpts = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  }

  catalogo:any;
  slider:any;
  negocios:any={
    descripcion: "",
    facebook: "",
    horaCierre: "",
    horaInicio: "",
    id: "",
    imagenPortada: "",
    nombreImagen: "",
    nombreNegocio: "",
    telefono: "",
    ubicacion: "",
    urlUbicacion: ""
  };
  option={
    slidesPerView:5,
    //loop:true, infinito
    spaceBewteen:10
    
  }
  idItem;
  idCategoria;
  idNegocio;
  constructor(private route:ActivatedRoute,private baseDatosService:BasedatosService,private router:Router) { 
    this.idItem=this.route.snapshot.paramMap.get('itemId');
    this.idCategoria=this.route.snapshot.paramMap.get('idCatalogo');
    this.idNegocio=this.route.snapshot.paramMap.get('idNegocio');

    this.getNegocio(this.idItem,this.idCategoria,this.idNegocio);
    this.getSlider(this.idItem,this.idCategoria,this.idNegocio);
    this.getCatlogo(this.idItem,this.idCategoria,this.idNegocio)
    
  }

  ngOnInit() {
  }

  getNegocio(idItem,idCategoria,idNegocio){
      this.baseDatosService.getNegocio(idItem,idCategoria,idNegocio).subscribe(getNegocio=>{
        this.negocios=getNegocio;
      })
    
  }
  getSlider(idItem,idCategoria,idNegocio){
    this.baseDatosService.getSlider(idItem,idCategoria,idNegocio).subscribe((getSlider)=>{
      this.slider=getSlider;
    })
  }
  getCatlogo(idItem,idCategoria,idNegocio){
    this.baseDatosService.getCatalogo(idItem,idCategoria,idNegocio).subscribe((getCatalogo)=>{
      this.catalogo=getCatalogo;
    })
  }
  onClick(){
    this.router.navigate(['/catalogo',this.idItem,this.idCategoria,this.idNegocio]);
  }
}
