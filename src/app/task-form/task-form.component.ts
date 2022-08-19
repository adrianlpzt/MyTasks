import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';

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

  addTarea() {
    this.dialog.closeAll();
  }

}
