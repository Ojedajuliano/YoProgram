import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';

@Component({
  selector: 'app-primertrabajo',
  templateUrl: './primertrabajo.component.html',
  styleUrls: ['./primertrabajo.component.css']
})
export class PrimertrabajoComponent {
 @Input() workdata: any;
 @Output() workRemove: EventEmitter<WorkModel>= new EventEmitter();

 deleteWork(workToDelete:WorkModel){
  console.log("eliminar", workToDelete);
  this.workRemove.emit(workToDelete);
 }
}
