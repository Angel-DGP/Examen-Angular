import { Component } from '@angular/core';
import { Tarea } from '../../module/tarea';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tareas',
  imports: [FormsModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  public listaTareas: Array<Tarea>;
  public titulo: string = '';
  constructor(){
    this.listaTareas = [
      new Tarea(1,'Numero uno','Descripcion',true),
      new Tarea(2,'Numero dos','Descripcion',false),
      new Tarea(3,'Numero tres','Descripcion',true),
      new Tarea(4,'Numero cuatro','Descripcion',true),
      new Tarea(5,'Numero cinco','Descripcion',true),
    ]
  }
  eliminarTarea(id:number){
    this.listaTareas.splice(id,1)
  }
  cambiarEstado(tarea: Tarea){
    tarea.completada = !tarea.completada
  }
  agregarTarea(){
  if(this.titulo.length>0){
    this.listaTareas.push(new Tarea(this.listaTareas.length+1,this.titulo,'',false))
  }
  else{
    alert("Necesitas rellenar el campo de titulo para poder crear la tarea")
  }
  }
  inFocus(){
    console.log("input activo")
  }
  inBlur(){
    console.log("input inactivo")
  }
}
