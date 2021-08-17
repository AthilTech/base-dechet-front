import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Provider } from 'src/app/core/models/provider';
import { AttachementService } from 'src/app/core/services/attachmentService';
import { ProviderService } from 'src/app/core/services/provider.service';
import Swal from 'sweetalert2';
import { AddOrEditProviderComponent } from '../add-or-edit-provider/add-or-edit-provider.component';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styles: []
})
export class ListProviderComponent implements OnInit {
  bsModalRef:BsModalRef;
  constructor(public providerService : ProviderService, public attachmentService : AttachementService , 
    public modalService:BsModalService) { }

  ngOnInit() {
    this.providerService.GetAllProviders().subscribe(
      res=>{
        this.providerService.ListAllProviders=res as []
      }
    )
  }

  AddProvider(){
    this.providerService.resetaddOrEditProviderForm();
    this.bsModalRef = this.modalService.show(AddOrEditProviderComponent)
  }

  onUpdateProvider(provider:Provider){
    this.populateProviderForm(provider)
    this.bsModalRef = this.modalService.show(AddOrEditProviderComponent)
  }


  populateProviderForm(provider:Provider){
    this.providerService.addOrEditProviderForm.reset({
      providerId:provider.providerId,
      providerName:provider.providerName,
      filePath:provider.filePath,
      fileName:provider.fileName,
      providerTel:provider.providerTel,
      isApproved: provider.isApproved,
      address: provider.address, 
      isActive: provider.isActive
     // fK_ProviderType:provider.fK_ProviderType,
    });

  }

  onDeleteProvider(provider)
  {
    Swal.fire({
      title: 'Etes-vous sûr de vouloir supprimer cette ligne?',
      text: 'Vous ne pourrez pas récupérer cet enregistrement!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'oui, supprimer!',
      cancelButtonText: 'Non, laisser'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Supprimé!',
          'Enregistrement supprimé.',
          'success'
        )
       
        this.providerService.DeleteProvider(provider).subscribe(
          res=>{
            console.log(res)
            this.providerService.GetAllProviders().subscribe(
              res=>{
            this.providerService.ListAllProviders=res as [];
              }
            )
          }
        )
   

      }
    })
  }


  onDownloadFile(filePath: string) {
    this.attachmentService.downloadAttachment(filePath).subscribe(res => {
      let attachement = res as string;
      window.open(attachement)
      console.log(attachement);
    }, err => {

    },
      () => {

      })
    // this.attachmentService.GetAttachmentFileDownloadableStream(filePath).subscribe(
    //   res => {
    //     // var blob: Blob = new Blob([this.attachementService.base64ToArrayBuffer(res)], { type: 'application/octet-stream' });
    //     saveAs(res, filePath)
    //     var reader = new FileReader();
    //     reader.readAsDataURL(res); 
    //     reader.onloadend=()=>{
    //         var base64data = reader.result;                
    //         console.log(base64data);
    //     }  
    //   //  this.result ='data:image/png;base64,${base64data}'
    //   //  console.log(this.result);
    // },
    //   err => {
    //     console.log(err);
    //   }
    // )
  }


  // onDownloadFile(filePath: string) {
  //   this.attachmentService.GetAttachmentFileDownloadableStream(filePath).subscribe(
  //     res => {
  //       // var blob: Blob = new Blob([this.attachmentService.base64ToArrayBuffer(res)], { type: 'application/octet-stream' });
  //       saveAs(res, filePath)
  //       var reader = new FileReader();
  //       debugger
  //       reader.readAsDataURL(res); 
  //       reader.onloadend=()=>{
  //           var base64data = reader.result;                
  //           console.log(base64data);
  //       }  
  //     //  this.result ='data:image/png;base64,${base64data}'
     
  //   },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

}
