import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/movie/movie';
//import { Backlight } from '@ionic-native/backlight/ngx';

import { IonicPage, NavParams } from 'ionic-angular';
//import {Storage} from '@ionic/storage';

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public navCtrl: NavController, private serviceProvider:ServiceProvider, alertCtrl:AlertController) { //private backlight:Backlight

    // Turn backlight on
//this.backlight.on().then(() => console.log('backlight on'));

// Turn backlight off
//this.backlight.off().then(() => console.log('backlight off'));

  }

  title:any = [];
  newTitle:string;

  ionViewDidLoad(){
    this.serviceProvider.getFilmInfo(this.newTitle).subscribe((data)=>{
      this.title = data.Search;
      console.log('ionViewDidLoad HomePage');
    })
  }

  // updateStatus(){
  //   this.navCtrl.push("FavoritesPage");//setting up my favorites page
  //   }

  //   ionViewWillEnter(){
  //    this.storage.get("myStatus")
  //     .then((data) =>
  //     {
  //     this.myStatus = data;
  //     })
  //     .catch((err) => {
  //     alert("Error accesssing Storage")
  //     })
  //   }
    

  changeMovie(){
    this.serviceProvider.getFilmInfo(this.newTitle).subscribe((data)=>{
      this.title = data.Search;
    })
  }

  
    


}
