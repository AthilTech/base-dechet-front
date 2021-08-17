import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Provider } from 'src/app/core/models/provider';
import { AttachementService } from 'src/app/core/services/attachmentService';
import { ProviderService } from 'src/app/core/services/provider.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-or-edit-provider',
  templateUrl: './add-or-edit-provider.component.html',
  styles: []
})
export class AddOrEditProviderComponent implements OnInit {

  constructor(public providerService: ProviderService, public bsModalRef: BsModalRef, public attachmentService: AttachementService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.providerService.addOrEditProviderForm.controls.isActive.setValue(true)
    if (this.providerService.addOrEditProviderForm.value.providerId == '00000000-0000-0000-0000-000000000000') {


      if (this.providerService.addOrEditProviderForm.controls.isApproved.value == true) {
        const uploadData = new FormData();
        this.attachmentService.addOrEditAttachment.value.BucketName = uploadData.append('BucketName', environment.AttachementConf.BucketName) //esm l'
        this.attachmentService.addOrEditAttachment.value.PathUnderBucket = uploadData.append('PathUnderBucket', environment.AttachementConf.PathUnderBucket[0])
        this.attachmentService.addOrEditAttachment.value.UploadedFiles = uploadData.append('UploadedFiles', this.attachmentService.addOrEditAttachment.get('UploadedFiles').value)
        this.providerService.addOrEditProviderForm.controls.fileName.setValue(this.attachmentService.attachedFileName)

        this.attachmentService.PostAttachment(uploadData).subscribe(
          res => {
            let filesPaths = JSON.parse(res) as string[]
            console.log(filesPaths)
            // debugger
            // this.tacheService.list[0].path = filesPaths[0]
            this.providerService.addOrEditProviderForm.controls.fileName.setValue(this.attachmentService.attachedFileName)
            //this.providerService.addOrEditProviderForm.controls.fileName.value = this.attachmentService.attachedFileName;
            this.providerService.addOrEditProviderForm.controls.filePath.setValue(filesPaths[0])

            this.providerService.postProvider().subscribe(
              res => {
                console.log(res)
                if (res == "Added done") {
                  Swal.fire({
                    position: 'top-end',
                    text: 'l\'ajout est effectué avec succès',
                    icon: 'success',
                    toast: true,
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false
                  });

                }
                if (res == "Elément Existe déjà!") {
                  Swal.fire({
                    position: 'top-end',
                    text: 'Elément Existe déjà',
                    icon: 'warning',
                    toast: true,
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false
                  });

                }
                this.providerService.resetaddOrEditProviderForm();
                this.providerService.GetAllProviders().subscribe(
                  res => {
                    this.providerService.ListAllProviders = res as Provider[]

                  }
                )
              });
            this.bsModalRef.hide();
            this.providerService.resetaddOrEditProviderForm()

          })

      }
      if (this.providerService.addOrEditProviderForm.controls.isApproved.value == false) {

        this.providerService.postProvider().subscribe(
          res => {
            console.log(res)
            if (res == "Added done") {
              Swal.fire({
                position: 'top-end',
                text: 'l\'ajout est effectué avec succès',
                icon: 'success',
                toast: true,
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false
              });

            }
            if (res == "Elément Existe déjà!") {
              Swal.fire({
                position: 'top-end',
                text: 'Elément Existe déjà',
                icon: 'warning',
                toast: true,
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false
              });

            }
            this.providerService.resetaddOrEditProviderForm();
            this.providerService.GetAllProviders().subscribe(
              res => {
                this.providerService.ListAllProviders = res as Provider[]

              }
            )
          });

      }
    }
    else {

      if (this.providerService.addOrEditProviderForm.controls.isApproved.value == true) {
        const uploadData = new FormData();
        this.attachmentService.addOrEditAttachment.value.BucketName = uploadData.append('BucketName', environment.AttachementConf.BucketName) //esm l'
        this.attachmentService.addOrEditAttachment.value.PathUnderBucket = uploadData.append('PathUnderBucket', environment.AttachementConf.PathUnderBucket[0])
        this.attachmentService.addOrEditAttachment.value.UploadedFiles = uploadData.append('UploadedFiles', this.attachmentService.addOrEditAttachment.get('UploadedFiles').value)
        this.providerService.addOrEditProviderForm.controls.fileName.setValue(this.attachmentService.attachedFileName)

        this.attachmentService.PostAttachment(uploadData).subscribe(
          res => {
            let filesPaths = JSON.parse(res) as string[]
            console.log(filesPaths)
            //  debugger
            // this.tacheService.list[0].path = filesPaths[0]
            this.providerService.addOrEditProviderForm.controls.fileName.setValue(this.attachmentService.attachedFileName)
            //this.providerService.addOrEditProviderForm.controls.fileName.value = this.attachmentService.attachedFileName;
            this.providerService.addOrEditProviderForm.controls.filePath.setValue(filesPaths[0])

            this.providerService.updateProvider().subscribe(
              res => {
                this.providerService.GetAllProviders().subscribe(
                  res => {
                    Swal.fire({
                      position: 'top-end',
                      text: 'la modificatin est effectuée avec succès',
                      icon: 'success',
                      toast: true,
                      timer: 3000,
                      timerProgressBar: true,
                      showConfirmButton: false
                    });
                    this.providerService.ListAllProviders = res as Provider[]
                  }
                )
              });

            this.bsModalRef.hide();
            this.providerService.resetaddOrEditProviderForm()
          })

      }
      if (this.providerService.addOrEditProviderForm.controls.isApproved.value == false) {

        this.providerService.updateProvider().subscribe(
          res => {
            this.providerService.GetAllProviders().subscribe(
              res => {
                Swal.fire({
                  position: 'top-end',
                  text: 'la modificatin est effectuée avec succès',
                  icon: 'success',
                  toast: true,
                  timer: 3000,
                  timerProgressBar: true,
                  showConfirmButton: false
                });
                this.providerService.ListAllProviders = res as Provider[]
              }
            )
          });

      }

      this.bsModalRef.hide();
    }
    this.providerService.GetAllProviders().subscribe(
      res => {
        this.providerService.ListAllProviders = res as Provider[]
      }
    )

  }

}
