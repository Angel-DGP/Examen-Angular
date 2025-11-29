import { Component } from '@angular/core';
import { MiembroEquipo } from '../miembro-equipo/miembro-equipo';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-equipo-lider',
  imports: [MiembroEquipo, FormsModule],
  templateUrl: './equipo-lider.html',
  styleUrl: './equipo-lider.css',
})
export class EquipoLider {
  public unContador: number = 0;
  public info: string = ''
  aumentarContador(){
    this.unContador++;  
  }
  recibirMensaje(mensaje:string){
    if(mensaje=='Aumenta el contador lidel'){
      console.log("Recibimos un mensaje del miembro de equipo, hay que aumentar el contador")
    this.unContador++;
    }else{
this.unContador--;
    }
  }
}
