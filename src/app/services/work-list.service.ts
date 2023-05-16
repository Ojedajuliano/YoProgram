import { Injectable } from '@angular/core';
import { WorkModel } from '../models/work.model';
import { Observable, of } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WorkListService {
  [x: string]: any;

  private worksUrl = 'api/work'

  httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})
  }

  constructor(private http: HttpClient) { }
  getWorks():Observable<WorkModel[]>{
    return this.http.get<WorkModel[]>(this.worksUrl);

  }
add(workAdd:WorkModel
){
  return this.http.post<WorkModel>(this.worksUrl, workAdd, this.httpOptions).pipe(tap((newWork:WorkModel) => console.log(newWork.title)))
}
remove(id:number):Observable<WorkModel>{
  const url= `${this.worksUrl}/${id}`;
  return this.http.delete<WorkModel>(url, this.httpOptions)
}
}
