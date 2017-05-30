import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  autorizacion:string = "Bearer BQC4ZBzoHehY8QMZ5oUWDoeuLof0oLlG9KD11NA9lfPq2UfCXa_aeJztWCWvSMc7WW1DHTanrxisNw6BXizeFw";

  constructor(private http:Http) { }

  getArtistas(termino:string) {

    let headers = new Headers();
    headers.append('authorization',this.autorizacion)

    let query:string = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers} )
          .map( resp => {
            this.artistas = resp.json().artists.items;
            return this.artistas;
          } )
  }

  getArtista(id:string) {
    let headers = new Headers();
    headers.append('authorization',this.autorizacion)

    let query:string = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers} )
          .map( resp => {
            return resp.json();
          } )
  }

  getTop(id:string) {
    let headers = new Headers();
    headers.append('authorization',this.autorizacion)

    let query:string = `/${ id }/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers} )
          .map( resp => {
            return resp.json().tracks;
          } )
  }

}
