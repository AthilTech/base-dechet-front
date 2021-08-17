import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProviderService } from 'src/app/core/services/provider.service';
import { TypeSubsidiaryProviderService } from 'src/app/core/services/type-subsidiary-provider.service';
import { TypeSubsidiaryService } from 'src/app/core/services/type-subsidiary.service';
import Swal from 'sweetalert2';
import { AddOrEditTypeSubsidiaryProviderComponent } from '../add-or-edit-type-subsidiary-provider/add-or-edit-type-subsidiary-provider.component';

@Component({
  selector: 'app-list-type-subsidiary-provider',
  templateUrl: './list-type-subsidiary-provider.component.html',
  styles: []
})
export class ListTypeSubsidiaryProviderComponent implements OnInit {
  bsModalRef:BsModalRef;
  constructor(public  typeSubsidiaryProviderService : TypeSubsidiaryProviderService, public  providerService : ProviderService , public  typeSubsidiaryService :  TypeSubsidiaryService
   ,  public  modalService:BsModalService) { }
  
  ngOnInit() {
    this.typeSubsidiaryProviderService. GetAllTypeSubsidiaryProvider().subscribe(
      res=>{
        this.typeSubsidiaryProviderService.ListAllTypeSubsidiaryProviders=res as []
      }
    )
 }

 AffectSubsidiaryTypeProvider(){
    this.typeSubsidiaryProviderService.resetaddOrEditTypeSubsidiaryProviderForm();
    this.providerService.ListAllProviders =[]
    this.typeSubsidiaryService.ListType_SubsidiariesByNatureIdAndSubsidiaryId=[]
    this.typeSubsidiaryService.ListType_SubsidiariesByNatureIdAndSubsidiaryId 
    this.bsModalRef = this.modalService.show(AddOrEditTypeSubsidiaryProviderComponent)
  }


  onDeleteType_Subsidiary_Provider(typeSubsidiaryProvider)
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
       this.typeSubsidiaryProviderService.DeleteTypeSubsidiaryProvider(typeSubsidiaryProvider).subscribe(
         res=>{
           console.log(res)
         //  this.toastr.error('Elément Supprimé!')
           this.typeSubsidiaryProviderService.GetAllTypeSubsidiaryProvider().subscribe(
             res=>{
           this.typeSubsidiaryProviderService.ListAllTypeSubsidiaryProviders=res as [];
             }
           )
         }
       )

     }
     
   
   })

  }
}
