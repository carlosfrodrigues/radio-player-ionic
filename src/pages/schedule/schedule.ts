import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  public lista =
  [
  		{
  		"title": "Programa DUO",
  		"description": "Apresentação Santiago Martins",
  		"date": "Segunda-feira às 20h00"
  		},
  		{
  		"title": "Discos Que Amamos",
  		"description": "Apresentação Leo Rocha",
  		"date": "Segunda-feira às 21h00"
  		},
  		{
  		"title": "Explicit Guitar",
  		"description": "Apresentação Marcelo Magoo",
  		"date": "Terça-feira às 20h00"
  		},
  		{
  		"title": "Pequenos Clássicos Perdidos",
  		"description": "Apresentação Fabio Bridges",
  		"date": "Terça-feira às 21h00"
  		},
  		{
  		"title": "The Blog that Celebrates Itself",
  		"description": "Apresentação Renato Malizia",
  		"date": "Terça-feira às 22h00"
  		},
  		{
  		"title": "Shoegazer Alive",
  		"description": "Apresentação Pedro Damian",
  		"date": "Quarta-feira às 20h00"
  		},
  		{
  		"title": "O Método Buda do Controle Mental",
  		"description": "Apresentação André Buda",
  		"date": "Quinta-feira às 19h00"
  		},
  		{
  		"title": "B-sides From The Otherside",
  		"description": "Apresentação Fausi Jr",
  		"date": "Quinta-feira às 20h00"
  		},
  		{
  		"title": "Terreno Estranho",
  		"description": "Apresentação Nilson Paes, Anderson Mandio e Gilberto Guimarães",
  		"date": "Quinta-feira às 21h00"
  		}
  	];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

}
