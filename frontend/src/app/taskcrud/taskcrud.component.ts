import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-taskcrud',
  templateUrl: './taskcrud.component.html',
  styleUrls: ['./taskcrud.component.css']
})
export class TaskcrudComponent {

tasksarray:any;
isResultLoaded = false;
currentTaskID ="";

title:any ;

constructor(private http: HttpClient)
{
  this.getAlltasks();
}
ngOnInit():void{
}
getAlltasks(){
  this.http.get("http://localhost:5000/api/tasks/")
  .subscribe((resultData:any)=>
  {
    this.isResultLoaded = true;
    console.log(resultData.data);
    this.tasksarray =resultData.data;
  })
}

register(){
  let bodyData = {
    "title" : this.title
  };
  this.http.post("http://localhost:5000/api/tasks/add",bodyData).subscribe((resultData:any)=>
  {
    console.log(resultData);
    alert("Task Registered Successfully")
    this.getAlltasks()
  });
}
setUpdate(data:any){
this.title = data.title

this.currentTaskID = data.id
}

updateRecords(){
  let bodyData = {
    "title" : this.title
  };
  this.http.put("http://localhost:5000/api/tasks/update"+"/"+this.currentTaskID,bodyData).subscribe((resultData:any)=>
  {
    console.log(resultData);
    alert("Task Registered Successfully!")
    this.getAlltasks();
  });
}
bgcolor(){
  document.body.style.backgroundColor = "green";
}
save(){
  if(this.currentTaskID == '')
  {
    this.register();
  }
  else
  {
    this.updateRecords();
  }
}
setDelete(id:any){
  console.log(id);
  this.http.delete(`http://localhost:5000/api/tasks/delete/${id}`).subscribe((resultDate:any)=>
  {
    console.log(resultDate);
    alert("student Deleted!")
    this.getAlltasks();
  });
}
}

