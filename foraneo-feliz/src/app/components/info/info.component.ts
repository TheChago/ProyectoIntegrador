import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
	public title: string;
	public subtitle: string;

  constructor() {
  	this.title = "Foraneo Feliz";
  	this.subtitle = "Proyecto Integrador II"
}

  ngOnInit() {
  }

}
