import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
//add taskService as  provider
  constructor(private taskService: TaskService) { }


  ngOnInit(): void {//void means it doesnt return anything
    this.taskService.getTasks().subscribe((tasks => (this.
    tasks = tasks)));
  }
  deleteTask(task: Task) {
    this.taskService
    .deleteTask(task)
    .subscribe(
      ()=> (this.tasks = this.tasks.filter(t => t.id !== 
        task.id))
      );

  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;//opposite of true or false
    this.taskService.updateTaskReminder(task).subscribe();
}

addTask(task:Task){
  this.taskService.addTask(task).subscribe((task) => (this.
  tasks.push(task)));
  

}
}
