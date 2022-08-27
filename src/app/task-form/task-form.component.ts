import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../tasks.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private data:DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  tituloTarea:string="";
  contenidoTarea:string="";

  async addTarea() {
    this.data.addTask(new Task(this.tituloTarea, this.contenidoTarea))
    this.dialog.closeAll();

    const tasks = await this.data.getTasks()

    console.log(tasks)
  }

}
