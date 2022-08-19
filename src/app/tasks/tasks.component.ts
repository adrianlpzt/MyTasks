import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { tasks } from '../tasks.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  title =  "Tarea 1";
  content = "Contenido de la tarea1"
  // AQUI INMPORTAMOS LA CLASE "TASKS" QUE ES CON LA QUE SE CONSTRUYEN LAS TAREAS
  @Input() tasks = new tasks(this.title, this.content);
  

  constructor(private datos:DataService) { }

  ngOnInit(): void {
  }

  
  // FUNCION BORRADO DE LA TAREA QUE PIDE CONFIRMACION DE ELIMINAR
  delete(){
    var conf = confirm("¿Estás seguro de que desea eliminar esta tarea?")
    if (conf == true) {
      alert("Tarea eliminada")
    } else {

    }
  }


}


