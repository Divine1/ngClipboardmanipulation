import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor(private httpClient : HttpClient) {

   }

   saveData(body){
    console.log("in saveData() start")
    let url="http://localhost:4000/imageupload"
    let httpOptions={
       headers: new HttpHeaders({
         'Content-Type': 'multipart/form-data' 
       })
     }
    this.httpClient.post(
      url,
      body,
      httpOptions
    ).subscribe((response)=>{
      console.log("response ",response)
    })
  }
  submitJSONData(){
    let url="http://thunder.com:4000/jsondata"

    this.httpClient.post(
      url,
      {
        name:"tiger",
        location:"jungle"
      }
    ).subscribe((response)=>{
      console.log("response ",response)
    })
  }
   uploadFileData(body){
     console.log("in saveData() start")
     let url="http://localhost:4000/imageupload"
     let httpOptions={
        headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data' 
        })
      }
     this.httpClient.post(
       url,
       body
     ).subscribe((response)=>{
       console.log("response ",response)
     })
   }
}
