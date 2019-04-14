import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public urlHome = 'http://api.playit.mobi/api/v1/games/gamedata/';
  public game:any;

  constructor(
    private route:ActivatedRoute,
    public http:HttpClient,
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.http.get(this.urlHome+id+'/8NHtk8QLdO').subscribe(data => {
      this.game = data;
      console.log(this.game);
    });
  }

}
