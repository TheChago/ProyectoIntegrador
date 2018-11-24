import { Component, OnInit } from '@angular/core';
import { Departament } from '../../models/departament';
import { DepartamentService } from '../../services/departament.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.css'],
  providers: [DepartamentService]
})
export class DepartamentComponent implements OnInit {
  public departaments: Departament[];
  public url: string;

  constructor(
    private _departamentService: DepartamentService
  ){
    this.url = Global.url;
  }

  ngOnInit(){
    this.getDepartaments();
  }

  getDepartaments(){
    this._departamentService.getDepartaments().subscribe(
      response => {
        if(response.departaments){
          this.departaments = response.departaments;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
