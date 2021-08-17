import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProviderType } from 'src/app/core/models/provider-Type';
import { ProviderTypeService } from 'src/app/core/services/provider-type.service';
import Swal from 'sweetalert2';
import { AddOrEditProviderTypeComponent } from '../add-or-edit-provider-type/add-or-edit-provider-type.component';

@Component({
  selector: 'app-list-provider-type',
  templateUrl: './list-provider-type.component.html',
  styles: []
})
export class ListProviderTypeComponent implements OnInit {
  bsModalRef:BsModalRef;
   constructor(public providerTypeService : ProviderTypeService,
     public modalService:BsModalService) { }

  ngOnInit() {
     this.providerTypeService.GetAllProviderTypes().subscribe(
       res=>{
         this.providerTypeService.ListAllProviderTypes=res as ProviderType[]
       }
     )
  }

   AddProviderType(){
     this.providerTypeService.resetaddOrEditProviderTypeForm();
     this.bsModalRef = this.modalService.show(AddOrEditProviderTypeComponent)
   }

  onUpdateProviderType(providerType:ProviderType){
     this.populateProviderTypeForm(providerType)
     this.bsModalRef = this.modalService.show(AddOrEditProviderTypeComponent)
   }
   populateProviderTypeForm(providerType:ProviderType){
     this.providerTypeService.addOrEditProviderTypeForm.reset({
      providerTypeId:providerType.providerTypeId,
      providerTypeLabel:providerType.providerTypeLabel,
      isActive: providerType.isActive
    });

  }

  onDeleteProviderType(providerType)
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
        providerType.isActive=false;
    this.providerTypeService.DeleteProviderType(providerType).subscribe(
      res=>{
        console.log(res)
        this.providerTypeService.GetAllProviderTypes().subscribe(
          res=>{
        this.providerTypeService.ListAllProviderTypes=res as ProviderType[];
          }
        )
      }
    )
   

      }
    })

  }

}
