import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent implements OnInit {

  artista:any;
  canciones:any = [];

  constructor(private activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map( params => params['id'])
      .subscribe( id => {
        this.spotifyService.getArtista(id)
          .subscribe( data => {
            this.artista = data;
          });
        this.spotifyService.getTop(id)
           .subscribe( data => {
             this.canciones = data;
             console.log(this.canciones);

           });
      })
  }

}
