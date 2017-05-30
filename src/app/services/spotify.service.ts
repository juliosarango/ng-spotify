import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";

  constructor(private http:Http) { }

  getArtistas(termino:string) {

    let headers = new Headers();
    headers.append('authorization','Bearer BQDDDotcnQJY7b7qxoACwNpS3p89UW3BmTyN_mXC5BonKVvlJ8i7lb7Meufo2hrceTZwL9kzKOoatSRQy3lRiw')

    let query:string = `q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers} )
          .map( resp => {
            console.log(resp);
          } )



  }

}
