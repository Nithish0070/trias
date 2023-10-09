import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  providers: [DatePipe],
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  text:any;
  toggle = false
  @Input() task: any
  constructor(private http: HttpClient, private dialogRef: MatDialog) { }
  onComplete(id: any) {
    this.http.put<any>(`/api/tasks/${id}/complete`, {}).subscribe(data => {
      this.dialogRef.open(PopUpComponent,{data:{result:data.message}})
      console.log(data)
    })
    
  }
  onDelete(id: any) {
    this.http.delete<any>(`/api/tasks/${id}`).subscribe(data => {
      this.dialogRef.open(PopUpComponent,{data:{result:data.message}})
      console.log(data)
    })
  }
  onUpdate(id:any) {
    this.http.put<any>(`/api/tasks/${id}`,{title:this.text}).subscribe(data => {
      this.dialogRef.open(PopUpComponent,{data:{result:data.message}})
      console.log(data)
    })
  }
  handleToggle(){
    this.toggle = !this.toggle
  }

}


