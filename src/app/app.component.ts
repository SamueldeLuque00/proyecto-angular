import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular';
  constructor(){}

  pantalla ="";
  pantalla2 = "";

  uno(){
    this.pantalla = this.pantalla + "1";
  }
  dos(){
    this.pantalla = this.pantalla + "2";
  }
  tres(){
    this.pantalla = this.pantalla + "3";
  }
  cuatro(){
    this.pantalla = this.pantalla + "4";
  }
  cinco(){
    this.pantalla = this.pantalla + "5";
  }
  seis(){
    this.pantalla = this.pantalla + "6";
  }
  siete(){
    this.pantalla = this.pantalla + "7";
  }
  ocho(){
    this.pantalla = this.pantalla + "8";
  }
  nueve(){
    this.pantalla = this.pantalla + "9";
  }
  cero(){
    this.pantalla = this.pantalla + "9";
  }
  suma(){
    this.pantalla = this.pantalla + "+";
  }
}
