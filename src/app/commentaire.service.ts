import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentaire } from './commentaire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private url = 'http://localhost:9001/commentaire';
  constructor(private http:HttpClient) { }
  addComment(content: any, sujetId: any) {

    return this.http.post(this.url+'/'+sujetId, content);
  }

  getCommentaireById(id: number): Observable<Commentaire>{
    return this.http.get<Commentaire>(this.url+'/sujet/'+id);
  }

  updateCommentaire(id: string, sujet: any){
  
    return this.http.put(this.url+'/'+id, sujet);
  }


  deleteCommentaire(id: number): Observable<Object>{
    return this.http.delete(this.url+'/'+id);
  }
}
