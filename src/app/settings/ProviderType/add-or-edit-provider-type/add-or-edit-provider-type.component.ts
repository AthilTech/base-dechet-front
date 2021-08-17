import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProviderType } from 'src/app/core/models/provider-Type';
import { ProviderTypeService } from 'src/app/core/services/provider-type.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-or-edit-provider-type',
  templateUrl: './add-or-edit-provider-type.component.html',
  styles: []
})
export class AddOrEditProviderTypeComponent implements OnInit {

  constructor(public providerTypeService:ProviderTypeService,public bsModalRef: BsModalRef) { }

  ngOnInit() {
    
  }

  onSubmit(){
    this.providerTypeService.addOrEditProviderTypeForm.controls.isActive.setValue(true)
    if (this.providerTypeService.addOrEditProviderTypeForm.value.providerTypeId == '00000000-0000-0000-0000-000000000000') {
      this.providerTypeService.postProviderType().subscribe(
        res => {
          if(res =="Added done"){
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
                 if(res == "Elément Existe déjà!"){
                   Swal.fire({
                     position: 'top-end',
                     text: 'Elément Existe déjà!',
                     icon: 'warning',
                     toast: true,
                     timer: 3000,
                     timerProgressBar: true,
                     showConfirmButton: false
                   });
       
                 }
          console.log(res);
          this.providerTypeService.resetaddOrEditProviderTypeForm();
          this.providerTypeService.GetAllProviderTypes().subscribe(
            res => {
              this.providerTypeService.ListAllProviderTypes = res as ProviderType[]
              

            }
          )
        });
      this.providerTypeService.resetaddOrEditProviderTypeForm()
  
    }
    else {
      this.providerTypeService.updateProviderType().subscribe(
        res => {
          Swal.fire({
            position: 'top-end',
            text: 'la modification est effectuée avec succès',
            icon: 'success',
            toast: true,
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
          });console.log(res);
          this.providerTypeService.GetAllProviderTypes().subscribe(
            res => {
              this.providerTypeService.ListAllProviderTypes = res as ProviderType[]
            }
          )
        });
        this.bsModalRef.hide();
    }
    this.providerTypeService.GetAllProviderTypes().subscribe(
      res => {
        this.providerTypeService.ListAllProviderTypes = res as ProviderType[]
      }
    )
    
  }

}
