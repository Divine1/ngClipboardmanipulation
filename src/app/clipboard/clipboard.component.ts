import { Component, OnInit } from '@angular/core';
import {ClipboardService} from './../clipboard.service'
@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent implements OnInit {
  fileuploadArray = []
  fileupload = new FormData()
  constructor(private clipboardService : ClipboardService) { 

  }

  ngOnInit() {
  }
  onuploadfileEvent(event){
    let files = event.target.files
    console.log("files.length ",files.length)
    console.log("files ",files)
    for(let i=0;i<files.length;i++){
      this.fileupload.append("imageupload",files[i])
      this.fileuploadArray.push(files[i])
    }
  }
  showFiles(){
    console.log("in showFiles")
    console.log("this.fileuploadArray ",this.fileuploadArray)
    console.log("fileupload ",this.fileupload)
    this.fileupload.forEach((data,index)=>{
      console.log("index %s data %s ",index,data)
      console.log("data.name ",data["name"])
    })
  }
  onFormSubmit(form){
    console.log("form ",form)
    console.log("form.value ",form.value)
    console.log("form.value.textbox ",form.value.textbox)
    console.log("form.value.imageupload ",form.value.imageupload)
    this.clipboardService.uploadFileData(this.fileupload)
  }

  submitJSONData(){
    this.clipboardService.submitJSONData()
  }
}
