import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Task } from './tasks.model';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient:HttpClient) { }

  addTask(task: Task) {
    this.httpClient.post('https://mytasks-4f982-default-rtdb.europe-west1.firebasedatabase.app/datos.json', task).subscribe({
      complete: () => console.log("Tarea registrada en la BBDD"),
      error: (e) => console.error(e),
    })

  }

  async getTasks(): Promise<Task[]> {
    const response = this.httpClient.get('https://mytasks-4f982-default-rtdb.europe-west1.firebasedatabase.app/datos.json')

    const data: {[key: string]: any} = await lastValueFrom(response)

    return Object.keys(data).map(id => {
      const value = data[id]


      const task = new Task(value.title, value.content)
      task.id = id
      task.isCompleted = value.isCompleted

      return task
    })
  }


}
