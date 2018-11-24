import { Component, OnInit } from '@angular/core';
import { Departament } from '../../models/departament';
import { DepartamentService } from '../../services/departament.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  providers: [DepartamentService, UploadService]
})
export class ForumComponent implements OnInit {

	public title: string;
  public departament: Departament;
  public save_departament;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _departamentService: DepartamentService,
    private _uploadService: UploadService
  ){
  	this.title = "Agregar departamento";
  	this.departament = new Departament('','','','','','','','');
  }

  ngOnInit() {
  }

  onSubmit(form){
    
    //Guardar los datos básicos
    this._departamentService.saveDepartament(this.departament).subscribe(
      response => {
        if(response.departament){
          
          //Subir la imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.departament._id, [], this.filesToUpload, 'image')
            .then((result:any) => {
              this.save_departament = result.departament;
              this.status = 'success';
              form.reset();
            });
          }else{
            this.save_departament = response.departament;
            this.status = 'success';
            form.reset();
          }
          
        }else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}