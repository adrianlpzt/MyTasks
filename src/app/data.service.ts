import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tasks } from './tasks.model';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient:HttpClient) { }

  addTask(task:tasks) {
    this.httpClient.post('https://mytasks-4f982-default-rtdb.europe-west1.firebasedatabase.app/datos.json', task).subscribe({
      complete: () => console.log("Tarea registrada en la BBDD"),
      error: (e) => console.error(e),
    })

  }


}
