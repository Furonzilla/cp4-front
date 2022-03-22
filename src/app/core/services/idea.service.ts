import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idea } from '../models/Idea.model';
import { IdeaToModify } from '../models/IdeaToModify.model';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(private httpClient: HttpClient) { }

  public createIdea(formdata: FormData): Observable<any> {
    return this.httpClient.post<any>(environment.backUrl + 'ideas/upload', formdata);
  }

  public getIdeas(): Observable<Idea[]> {
    return this.httpClient.get<Idea[]>(environment.backUrl + 'ideas/display');
  }

  public getIdeasOfCurrentuser(): Observable<Idea[]> {
    return this.httpClient.get<Idea[]>(environment.backUrl + 'ideas/current-user');
  }

  public getIdeaByIdForUpdate(id: number): Observable<IdeaToModify> {
    return this.httpClient.get<IdeaToModify>(environment.backUrl + 'ideas/' + id);
  }

  public updateIdeaOfCurrentUserById(formdata: FormData, id: number): Observable<any> {
    return this.httpClient.put<any>(
      environment.backUrl + 'ideas/' + id + '/update',
      formdata
    );
  }

  public deleteIdeaOfCurrentUserById(id: number): Observable<any> {
    return this.httpClient.delete<any>(environment.backUrl + 'ideas/delete-idea' + id);
  }
}