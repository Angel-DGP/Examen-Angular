import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-crear-tarea',
  imports: [FormsModule],
  templateUrl: './crear-tarea.html',
  styleUrl: './crear-tarea.css',
})
export class CrearTarea {
  public titulo:string = '';
  public descripcion:string = '';
  guardar(){
    if(this.titulo=='' || this.descripcion==''){
      alert('Los campos estan vacios')
    }
    else{
      console.log("Tarea Creada con los datos: Titulo: " + this.titulo + " Descripcion: " + this.descripcion)
    }
  }
}
