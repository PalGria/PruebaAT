import { Injectable } from '@angular/core';
import { concatMap, Observable, map} from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Direccion } from '../interfaces/direccion';

const endpoint1 = "http://localhost:3000/usuarios/";
const endpoint2 = "http://localhost:3000/usuariosDirID/";

@Injectable({
  providedIn: 'root'
})
export class UsuServiceService {

  constructor(private http: HttpClient) { }
  getUserInfo1(id: string): Observable<Usuario> {
    return this.http.get(`${endpoint1}${id}`) as Observable<Usuario> ;
  }
  getDireccion1(id: string) : Observable<Direccion> {
    return this.http.get(`${endpoint1}${id}/direccion`) as Observable<Direccion>;
  }
  getUser1(id: string): Observable<Usuario>  {
    return this.getUserInfo1(id).pipe(
    concatMap(usu => this.getDireccion1(id).pipe(
      map(direccion => ({
        ...usu, ...direccion
      }))
    )))

  }

  getUserInfo2(id: string): Observable<any> {
    return this.http.get(`${endpoint2}${id}`) as Observable<Usuario> ;
  }
  getDireccion2(id: string) : Observable<any> {
    return this.http.get(`${endpoint2}direcciones/${id}`) as Observable<Direccion>;
  }
  getUser2(id: string): Observable<Usuario>  {
    return this.getUserInfo2(id).pipe(
    concatMap(usu => this.getDireccion2(usu.direccionID).pipe(
      map(direccion => ({
        ...usu, ...direccion
      }))
    )))

  }
}
