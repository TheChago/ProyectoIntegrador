import { Component, OnInit } from '@angular/core';
import { Departament } from '../../models/departament';
import { DepartamentService } from '../../services/departament.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../forum/forum.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DepartamentService, UploadService]

})
export class EditComponent implements OnInit {
	public title: string;
  public departament: Departament;
  public save_departament;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private _departamentService: DepartamentService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = "Editar departamento";
    this.url = Global.url;
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

  onSubmit(){
    this._departamentService.updateDepartament(this.departament).subscribe(
      response => {
        if(response.departament){
          
          //Subir la imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.departament._id, [], this.filesToUpload, 'image')
            .then((result:any) => {
              this.save_departament = result.departament;
              this.status = 'success';
            });
          }else{
            this.save_departament = response.departament;
            this.status = 'success';

          }
        }else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
