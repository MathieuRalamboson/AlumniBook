import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Alumni } from '../module/alumni/alumni';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {

  private _server = environment.webservice.server;

  constructor(private http: HttpClient) { 

  }

  /**
   *  WS pour récuperer tous les alumnis
   * @returns 
   */
  public getAllAlumni(): Observable<any> {
    const url = `${this._server}/alumni/getAllAlumni`;

    return this.http.get<Alumni[]>(url);
  }

  /**
   *  WS pour la création d'un alumni
   * @param params de l'alumni à ajouter
   * @returns 
   */
  public createAlummni(params: any): Observable<any> {
    const url = `${this._server}/alumni/create`;
    return this.http.post<any>(url, params);
  }

  /**
   * WS pour la suppression d'un alumni
   * @param id de l'alumni a supprimer
   * @returns 
   */
  public deleteAlumni(id :number): Observable<any> {
    const url = `${this._server}/alumni/delete/${id}`;
    return this.http.delete<any>(url);
  }

  /**
   *  WS pour la modification d'un alumni
   * @param id de l'alummni à modifier
   * @param params 
   * @returns 
   */
  public updateAlumni(id: number,params :any) : Observable<any> {
    const url = `${this._server}/alumni/update/${id}`
    return this.http.put<any>(url,params);
  }




}
