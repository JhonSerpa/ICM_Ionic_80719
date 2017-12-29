import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src';
import { EstgaPage } from '../estga';

@Component({
    selector: 'page-almocoEs',
    templateUrl: 'almocoEs.html'
  })
  export class AlmocoEsPage {

    public _robotOverlords = {};


    constructor( public http: Http, public navCtr: NavController) {
        this.readFile();
    }



    readFile() {
        //http://services.web.ua.pt/sas/ementas?place=santiago&format=json
        //http://services.web.ua.pt/sas/ementas?date=week&place=santiago&format=json
        this.http.request('http://services.web.ua.pt/sas/ementas?place=estga&format=json').map(res => res.json())
            .subscribe(text => {
                
                this._robotOverlords= text;
                    for (var i = 0; i< text.menus.menu.length; i++){
                        try{
                            if(text.menus.menu[i]['@attributes'].meal == "Almoço" && text.menus.menu[i]['@attributes'].canteen == "Refeitório ESTGA"){
                                if(text.menus.menu[i].items.item.length > 0){
                                    for (var z = 0; z < text.menus.menu[i].items.item.length; z++){
                                        if (text.menus.menu[i].items.item[z] != "[object Object]"){
                                            document.getElementById('Day').outerHTML += "<p>" +text.menus.menu[i].items.item[z] +"<p><br>";
                                        }
                                    }

                                }
                            }
                    }catch(Exeption){
                            
                    }

                    
                    
                }
               
            });
    }


    goBack(){
        this.navCtr.setRoot(EstgaPage);

    }

}