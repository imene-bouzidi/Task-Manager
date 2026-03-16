import { computed, Injectable, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taksSignal = signal([
    {
      id: 1,
      title: 'Learn Angular Basics',
      description: 'Understand components, services, and routing',
      completed: true,
      createdAt: new Date('2026-03-05'),
    },
    {
      id: 2,
      title: 'Built a project',
      description: 'Create a task manager application',
      completed: false,
      createdAt: new Date('2026-03-05'),
    },
  ]);

 tasks = this.taksSignal.asReadonly()

 completedTasks = computed(()=>{
  return this.taksSignal().filter((tasks) => tasks.completed);
 });
 activeTasks = computed(()=>{
  return this.taksSignal().filter((tasks) => !tasks.completed);
 });

 getTask(id: number){
  return this.tasks().find(task => task.id === id)
 }

  deleteTask(id: number) {
    this.taksSignal.update((tasks) => {
      return tasks.filter((task) => task.id !== id);
    });
  }
 
 AddTask(title: string, description: string){
  const task: Task = {
    id: this.tasks.length + 1,
    title,
    description,
    completed: false,
    createdAt: new Date()
  };

  this.taksSignal.update((tasks)=> [...tasks, task]);
 }

}
