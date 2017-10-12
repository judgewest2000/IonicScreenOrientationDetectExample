import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private screenOrientation: ScreenOrientation) {

  }

  orientation = 'not set';

  ngOnInit() {
    
    this.orientation=this.screenOrientation.type;

    this.screenOrientation.onChange().subscribe(val => {
      const so = this.screenOrientation;
      this.orientation =  so.type;
    });
  }


}
