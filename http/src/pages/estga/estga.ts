import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { AlmocoEsPage } from '../estga/almocoEs/almocoEs';
import { JantarEsPage } from '../estga/jantarEs/jantarEs';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-Estga',
  templateUrl: 'estga.html'
})
export class EstgaPage {

    public _robotOverlords = {};

    constructor( public http: Http, public navCtr: NavController) {
        
    }


    goToAlmoco(){
        this.navCtr.setRoot(AlmocoEsPage);

    }

    goToJantar(){
        this.navCtr.setRoot(JantarEsPage);

    }
    
    goBack(){
        this.navCtr.setRoot(HomePage);

    }
   

}
