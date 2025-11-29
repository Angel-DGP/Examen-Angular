import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-miembro-equipo',
  imports: [],
  templateUrl: './miembro-equipo.html',
  styleUrl: './miembro-equipo.css',
})
export class MiembroEquipo {
  @Input() informacion: string = "";
  @Output() mensajeEnviado = new EventEmitter();
  aumentarContadorHijo(){
    this.mensajeEnviado.emit("Aumenta el contador lidel")
  }
  disminuirContadorHijo(){
    this.mensajeEnviado.emit("Disminuir el contador lidel")
  }
}
