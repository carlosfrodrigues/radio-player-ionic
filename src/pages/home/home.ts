import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RadioPlayer } from '../../../radio';
import { InfoProvider} from '../../providers/info/info';
import {SchedulePage} from '../schedule/schedule';
import {Network} from '@ionic-native/network';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RadioPlayer, InfoProvider]
})

export class HomePage {
  public showToggle:boolean = false;
  public info: string = '';
  public disconnect:boolean = false;

  constructor(
    public player: RadioPlayer,
    private infoProvider: InfoProvider,
    private network: Network,
    public navCtrl: NavController ) {
  }

  play(){
    this.player.play();

  }

  stop(){
    this.player.stop();
  }


  toggle(){
    if(this.showToggle == true){
      this.showToggle = false;
    }else{
    this.showToggle = true;
    }
  }

  getjson(){
    this.infoProvider.getInfo().subscribe(
      data=>{
        const response = (data as any);
        const returnedObject = response.playing;
        this.info = returnedObject;
      },
      error=>{
        this.info = '';
      }
    );
  }

  goToSchedulePage(){
    this.navCtrl.push(SchedulePage);
  }

  ionViewDidLoad(){
    this.getjson();
    Observable.interval(5000).subscribe(x => {
      this.getjson();
    });
    this.play();

    this.network.onConnect().subscribe(data => {
      if((this.disconnect == true) && (this.showToggle == false)){
        this.stop();
        this.play();
        this.disconnect = false;
      }
    });

    this.network.onDisconnect().subscribe(data => {
      this.disconnect = true;
    });
  }

}
