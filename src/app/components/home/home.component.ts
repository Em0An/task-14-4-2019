import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public urlHome = 'http://api.playit.mobi/api/v1/games/getList/2/egypt';
  public items:any;

  constructor(
    public http:HttpClient,
    private router:Router
  ) {}
  
  ngOnInit() {
    this.http.get(this.urlHome).subscribe(data => {
      this.items = data.games_list;
    });
  }

  goGame(id) {
    this.router.navigate(['/game', id]);
  }

}
