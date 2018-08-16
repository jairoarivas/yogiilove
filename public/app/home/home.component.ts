import { Component, HostListener } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { AppComponent } from '../app.component';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'home',
  templateUrl: './app/home/home.template.html',
  styleUrls: ['app/app.styles.css']

})
export class HomeComponent {
  // variables for toggle menu
  wasClicked:boolean;
  g:HTMLCollectionOf<HTMLElement>;
  // image:HTMLElement;
  adoImage:HTMLCollectionOf<HTMLElement>;
  num:number;

  // xscrollPosition:number;
  // yscrollPosition:number;

  // scrollLoop(){
  //   this.xscrollPosition = window.scrollX;
  //   this.yscrollPosition = window.scrollY;
  //   this.setTranslate(0,this.yscrollPosition,this.image);
  //
  //   requestAnimationFrame(this.scrollLoop);
  // }
  //
  // setTranslate(xPos, yPos,el){
  //   el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0";
  // }

  // displayNextImage(){
  //
  //   if(this.num >= 3){
  //     this.num = 0;
  //   }
  //   if(this.num === 0 ){
  //     document.getElementById('adoImage1').style.display = 'block';
  //     document.getElementById('adoImage2').style.display = 'none';
  //     document.getElementById('adoImage3').style.display = 'none';
  //   }
  //   else if(this.num === 1 ){
  //     document.getElementById('adoImage1').style.display = 'none';
  //     document.getElementById('adoImage2').style.display = 'block';
  //     document.getElementById('adoImage3').style.display = 'none';
  //   }
  //   else if(this.num === 2 ){
  //     document.getElementById('adoImage1').style.display = 'none';
  //     document.getElementById('adoImage2').style.display = 'none';
  //     document.getElementById('adoImage3').style.display = 'block';
  //   }
  //   this.num ++;
  // }
  ngOnInit(){
    // this.num = 0;
    // console.debug(this.num);
    // this.image = document.getElementById("welcomeImage");
    // window.addEventListener("DOMContentLoaded", this.scrollLoop, false);
    //when button is clicked becomes true
    this.wasClicked = false;

    // let pic = Observable.timer(0,3000);
    // pic.subscribe(this.displayNextImage);
    //g hold all the items with class "restOfSite"
    //will be used to hide all none nav menu items when menu is opened
    this.g = document.getElementsByClassName('restOfSite') as HTMLCollectionOf<HTMLElement>;

  }

  //click event for menu button
  clicker(event){
    if(this.wasClicked){
      this.wasClicked = false;
      event.currentTarget.classList.remove('clicked');
      for(var i =0; i < this.g.length; i++){
        this.g[i].style.display = 'flex';
      }
    }
    else{
      event.currentTarget.classList.add('clicked');
      for(var i =0; i < this.g.length; i++){
        this.g[i].style.display = 'none';
      }
      this.wasClicked = true;
    }
  }
}
