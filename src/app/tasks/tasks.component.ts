import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}

export class tasks {
  title: String;
  content: String;
  isCompleted: Boolean;
}
