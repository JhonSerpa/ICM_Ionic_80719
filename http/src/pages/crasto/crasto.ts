import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { AlmocoCrPage } from '../crasto/almocoCr/almocoCr';
import { JantarCrPage } from '../crasto/jantarCr/jantarCr';
import { HomePage } from '../home/home'

@Component({
  selector: 'page-Crasto',
  templateUrl: 'crasto.html'
})
export class CrastoPage {

    public _robotOverlords = {};

    constructor( public http: Http, public navCtr: NavController) {
        
    }


    goToAlmoco(){
        this.navCtr.setRoot(AlmocoCrPage);

    }

    goToJantar(){
        this.navCtr.setRoot(JantarCrPage);

    }


    goBack(){
        this.navCtr.setRoot(HomePage);

    }


    
   

}
