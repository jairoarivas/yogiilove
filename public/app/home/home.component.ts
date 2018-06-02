import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'home',
  templateUrl: './app/home/home.template.html',
  styleUrls: ['app/app.styles.css']

})
export class HomeComponent {
  // variables for toggle menu
  wasClicked:boolean;
  g:HTMLCollectionOf<HTMLElement>;

  ngOnInit(){
    //when button is clicked becomes true
    this.wasClicked = false;

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
