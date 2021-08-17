import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class AttachementService {
  attachedFileName = 'Choose file'
  fileURL
  result;
  imageBlobUrl;

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  addOrEditAttachment = this.fb.group({
    BucketName: [''],
    PathUnderBucket: [''],
    UploadedFiles: []
  });

  upload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.addOrEditAttachment.get('UploadedFiles').setValue(event.target.files[0]);
        this.attachedFileName = event.target.files[0].name
        this.fileURL = reader.result as string;
        // this.fileURL = reader.result
        // console.log(this.fileURL);
      };
      reader.readAsDataURL(event.target.files[0]);
      // var mimeType = event.target.files[0].type;
      // console.log(mimeType);

    }
  }

  GetAttachmentFileDownloadableLink(attachmentPath) {
    return this.http.get(environment.AttachementURL + '/Attachment/GetAttachmentFileDownloadableLink' + attachmentPath, { responseType: "blob" }).subscribe(
      res => {
        // this.result = res 
        saveAs(res, attachmentPath)
      },
      err => {
        console.log(err);
      }
    )
  }

  GetAttachmentFileDownloadableStream(attachmentPath) {
    return this.http.get(environment.AttachementURL + '/Attachment/GetAttachmentFileDownloadableStream?attachmentPath=' + attachmentPath, { responseType: "blob" })
  }






  downloadAttachment(attachmentPath) {
    return this.http.get(environment.AttachementURL + "/Attachment/GetAttachmentFileDownloadableLink?attachmentPath=" + attachmentPath, { responseType: 'text' })
  }





  base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }




  // GetAttachmentFileDownloadableStream2(attachmentPath) {
  //   return this.http.get(environment.apiURL + '/Attachment/Attachment/GetAttachmentFileDownloadableStream?attachmentPath=' + attachmentPath,{responseType:})
  // }

  //   AddAttachment(attachment:AttachementDTO) {
  //     return this.http.post(environment.apiURL + '/Attachment/AddAttachment' + attachment, { responseType: "text" })
  //   }
  PostAttachment(uploadData) {
    return this.http.post(environment.AttachementURL + '/Attachment/AddAttachment', uploadData, { responseType: "text" })
  }

}