import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private musicService: MusicService ,private route :Router) { }
arrayOfMusic=[];
  ngOnInit() {
    // this.musicService.setWishList().subscribe(data=>
    //   {
    //       console.log(data.tracks.track);
    //       this.arrayOfMusic=data.tracks.track;
    //   });

  }

}
