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
  operador = "";
  punto = false;

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
    this.pantalla = this.pantalla + "0";
  }
  decimal(){
    if(this.punto == false){
      this.pantalla = this.pantalla + ".";
      this.punto = true;
    }
  }
  borrarM(){
    this.pantalla;
    let nueva = "";
    for(let  i=0; i<this.pantalla.length-1; i++)
    {
      nueva = nueva + this.pantalla[i];
    }
    this.pantalla = this.pantalla = nueva;
  }
  borrar(){
    this.pantalla = "";
    this.pantalla2 = "";
  }
  borrarP(){
    this.pantalla = "";
  }
  sumar(){
    this.pantalla2 = this.pantalla;
    this.pantalla="";
    this.operador="sumar";
    this.punto = false;
  }
  restar(){
    this.pantalla2 = this.pantalla;
    this.pantalla = "";
    this.operador = "restar"
    this.punto = false;
  }
  dividir(){
    this.pantalla2 = this.pantalla;
    this.pantalla = "";
    this.operador = "dividir";
    this.punto = false;
  }
  multiplicar(){
    this.pantalla2 = this.pantalla;
    this.pantalla = "";
    this.operador = "multiplicar"
    this.punto = false;
  }
  resultado(){
    let valor1 = Number(this.pantalla);
    let valor2 = Number(this.pantalla2);

    if(this.operador == "sumar"){
      let suma = Number(valor1) + Number(valor2);
      this.pantalla = suma.toString();
      this.punto = true;
    }else if(this.operador == "restar"){
      let resta = Number(valor1) - Number(valor2);
      this.pantalla = resta.toString();
      this.punto = true;
    }else if(this.operador == "multiplicar"){
      let multiplica = Number(valor1) * Number(valor2);
      this.pantalla = multiplica.toString();
      this.punto = true;
    }else if(this.operador == "dividir"){
      let divide = Number(valor1) / Number(valor2);
      this.pantalla = divide.toString();
      this.punto = true;
    }
  }
}
