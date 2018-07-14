"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
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
    HomeComponent.prototype.displayNextImage = function () {
        if (this.num >= 3) {
            this.num = 0;
        }
        if (this.num === 0) {
            document.getElementById('adoImage1').style.display = 'block';
            document.getElementById('adoImage2').style.display = 'none';
            document.getElementById('adoImage3').style.display = 'none';
        }
        else if (this.num === 1) {
            document.getElementById('adoImage1').style.display = 'none';
            document.getElementById('adoImage2').style.display = 'block';
            document.getElementById('adoImage3').style.display = 'none';
        }
        else if (this.num === 2) {
            document.getElementById('adoImage1').style.display = 'none';
            document.getElementById('adoImage2').style.display = 'none';
            document.getElementById('adoImage3').style.display = 'block';
        }
        this.num++;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.num = 0;
        console.debug(this.num);
        // this.image = document.getElementById("welcomeImage");
        // window.addEventListener("DOMContentLoaded", this.scrollLoop, false);
        //when button is clicked becomes true
        this.wasClicked = false;
        var pic = Rx_1.Observable.timer(0, 3000);
        pic.subscribe(this.displayNextImage);
        //g hold all the items with class "restOfSite"
        //will be used to hide all none nav menu items when menu is opened
        this.g = document.getElementsByClassName('restOfSite');
    };
    //click event for menu button
    HomeComponent.prototype.clicker = function (event) {
        if (this.wasClicked) {
            this.wasClicked = false;
            event.currentTarget.classList.remove('clicked');
            for (var i = 0; i < this.g.length; i++) {
                this.g[i].style.display = 'flex';
            }
        }
        else {
            event.currentTarget.classList.add('clicked');
            for (var i = 0; i < this.g.length; i++) {
                this.g[i].style.display = 'none';
            }
            this.wasClicked = true;
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './app/home/home.template.html',
            styleUrls: ['app/app.styles.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map