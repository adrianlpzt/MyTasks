import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Task } from '../tasks.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  title =  "Tarea 1";
  content = "Contenido de la tarea1"
  public tasks: Task[]
  // AQUI INMPORTAMOS LA CLASE "TASKS" QUE ES CON LA QUE SE CONSTRUYEN LAS TAREAS
  

  constructor(private datos:DataService) { }

  async ngOnInit() {
    this.tasks = await this.datos.getTasks()
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


