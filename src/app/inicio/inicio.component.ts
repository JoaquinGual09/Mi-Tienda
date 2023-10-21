import { Component } from '@angular/core';
import { inicio } from './interface/inicio-interface';
import { inicioService } from '../service/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  constructor(private inicioSvc: inicioService) { }
  data: inicio[] = [];

  ngOnInit(): void {
    this.llenarData();
    if(this.autoSlider){
      this.autoSliderImages();
    }
  }

  selectedIndex = 0;
  indicators = true;
  controls = true;
  autoSlider = true;
  sliderInterval = 3000;

  llenarData() {
    this.inicioSvc.getdata().subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }

  selectImage(index : number):void{
    this.selectedIndex = index;
  }
  onprevClick():void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.data.length -1;
    }
    else{
      this.selectedIndex--;
    }
  }
  onnextClick():void{
    if (this.selectedIndex === this.data.length -1) {
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }
  }
  autoSliderImages():void{
    setInterval(()=>{
      this.onnextClick();
    },this.sliderInterval)
  }

}

