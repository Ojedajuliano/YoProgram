import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkModel } from 'src/app/models/work.model';
import { WorkListService } from 'src/app/services/work-list.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

@Input() titlework: string= "trabajos";

workList:WorkModel[] = [];

constructor(private WorkListService: WorkListService ){};

ngOnInit(): void {
   this.getWorklist(); }
;

getWorklist():void{
 this.WorkListService.getWorks().subscribe((Worklist) => {this.workList = Worklist} );
}
;

addWork(){
  let newId:number= this.workList.length+1;
  const newWork: WorkModel ={
    id:newId,
    title:`trabajo ${newId}`,
    urlImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4d6HhQIVYWcf74LZEZEutP4XTVOw4TvpCZA&usqp=CAU",
    Skill: "50%",
}
this.WorkListService.add(newWork as WorkModel).subscribe((work: WorkModel)=> {this.workList.push(work);})
}
 removeWorkToList(workToRemove: WorkModel): void{
  this.WorkListService.remove(workToRemove.id).subscribe();
  this.getWorklist();
 }

}


