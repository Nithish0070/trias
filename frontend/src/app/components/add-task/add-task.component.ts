import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text: any;
  constructor(private http: HttpClient, private dialogRef: MatDialog) { }

  onAdd(){
    this.http.post<any>(`/api/tasks/`,{title:this.text}).subscribe(data => {
      this.dialogRef.open(PopUpComponent,{data:{result:data.message}})
      console.log(data)
    })
  }
}
