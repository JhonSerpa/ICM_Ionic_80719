import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { AlmocoSaPage } from '../santiago/almocoSa/almocoSa';
import { JantarSaPage } from '../santiago/jantarSa/jantarSa';
import { HomePage} from '../home/home'

@Component({
  selector: 'page-Santiago',
  templateUrl: 'santiago.html'
})
export class SantiagoPage {

    public _robotOverlords = {};

    constructor( public http: Http, public navCtr: NavController) {
    }


    goToAlmoco(){
        this.navCtr.setRoot(AlmocoSaPage);

    }

    goToJantar(){
        this.navCtr.setRoot(JantarSaPage);

    }
    
    goBack(){
        this.navCtr.setRoot(HomePage);

    }
   
}
