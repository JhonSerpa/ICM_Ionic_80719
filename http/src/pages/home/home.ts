import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src';
import { Observable } from 'rxjs/Observable';
import { CrastoPage } from '../crasto/crasto';
import { SantiagoPage } from '../santiago/santiago';
import { EstgaPage } from '../estga/estga';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( public http: Http, public navCtr: NavController) {
    
  }


  goToCrasto(){
    console.log("Going to crasto");
    this.navCtr.setRoot(CrastoPage);
  }


  goToSantiago(){

    this.navCtr.setRoot(SantiagoPage);
  }

  goToEstga(){
    this.navCtr.setRoot(EstgaPage);
  }
}


