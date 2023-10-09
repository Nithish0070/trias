import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit{
  tasks: any;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<any>('/api/tasks').subscribe(data => {
            this.tasks = data;
            console.log(this.tasks)
        })
    
  }

}
