import { Component, OnInit } from '@angular/core';
import { Departament } from '../../models/departament';
import { DepartamentService } from '../../services/departament.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [DepartamentService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public departament: Departament;
  public confirm: boolean;

  constructor(
    private _departamentService: DepartamentService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getDepartament(id);
    });
  }
  
  getDepartament(id){
    this._departamentService.getDepartament(id).subscribe(
      response => {
        this.departament = response.departament;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deleteDepartament(id){
    this._departamentService.deleteDepartament(id).subscribe(
      response => {
        if(response.departament){
          this._router.navigate(['/departamentos']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
