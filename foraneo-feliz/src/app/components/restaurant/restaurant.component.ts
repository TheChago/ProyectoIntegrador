import { Component, OnInit } from '@angular/core';
declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.galeria').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 400
    });
  }

}
