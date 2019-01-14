import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';


@Injectable()
export class UploadfileService {

  constructor(private http: HttpClient, private http2: Http) { }

  pushFileToStorage(file: File, id: number) {
    let url1= 'http://localhost:8080/api/file/';
    let url2 = `${url1}${id}/upload`;
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    //formdata.append('file', new Blob([JSON.stringify(file)], { type: 'application/json'}), 'file');
    //formdata.append(JSON.stringify(file), file);
    //formdata.append('file', new Blob([JSON.stringify(file)], {
      //type: 'application/json'
      //}));
    //formdata.append('type', application/json);
    const req = new HttpRequest('POST', url2, formdata, {
      reportProgress: true,
      responseType: 'text'
    } );

    return this.http.request(req);
    //return this.http2.post(url2,  formdata)
      //.pipe(
        //map(
          //res => {return res.json(); }
        //)
      //);

  }

  getFiles(id: number){
    let url = 'http://localhost:8080/api/file/';
    let url2= `${url}${id}`;
    return this.http.get(url2);
  }

}
