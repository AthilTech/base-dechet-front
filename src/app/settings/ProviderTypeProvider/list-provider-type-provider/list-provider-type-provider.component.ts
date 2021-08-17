import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Type_Subsidiary } from 'src/app/core/models/type-subsidiary';
import { ProviderTypeProviderService } from 'src/app/core/services/provider-type-provider';
import { ProviderTypeService } from 'src/app/core/services/provider-type.service';
import { ProviderService } from 'src/app/core/services/provider.service';
import { TypeSubsidiaryService } from 'src/app/core/services/type-subsidiary.service';
import Swal from 'sweetalert2';
import { AddOrEditProviderTypeProviderComponent } from '../add-or-edit-provider-type-provider/add-or-edit-provider-type-provider.component';

@Component({
  selector: 'app-list-provider-type-provider',
  templateUrl: './list-provider-type-provider.component.html',
  styles: []
})
export class ListProviderTypeProviderComponent implements OnInit {
  bsModalRef:BsModalRef;
  constructor(public providerTypeProviderService : ProviderTypeProviderService,
    public providerService : ProviderService,  public providerTypeService : ProviderTypeService, 
     public modalService:BsModalService) { }

  ngOnInit() {
     this.providerTypeProviderService. GetAllProvider_ProviderTypes().subscribe(
       res=>{
         this.providerTypeProviderService.ListAllProviderTypeProviders=res as []
       }
     )
  }

  AffectProviderTypeProvider(){
     this.providerTypeProviderService.resetaddOrEditProviderTypeProviderForm();
     this.bsModalRef = this.modalService.show(AddOrEditProviderTypeProviderComponent)
   }

  //  onUpdateType_Subsidiary(typeSubsidiary:Type_Subsidiary){
  //   this.populateType_SubsidiaryForm(typeSubsidiary)
  //    this.bsModalRef = this.modalService.show(AddOrEditTypeSubsidiaryComponent)
  //  }
  //  populateType_SubsidiaryForm(typeSubsidiary:Type_Subsidiary){
  //    this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.reset({
  //     type_SubsidiaryId:typeSubsidiary.type_SubsidiaryId,
  //     fK_Subsidiary:typeSubsidiary.fK_Subsidiary,
  //     fK_Type:typeSubsidiary.fK_Type,
  //    });

  //  }

   onDeleteProviderTypeProvider(provider_ProviderType)
   {
    // Swal({
    //   title: 'Etes-vous sûr de vouloir supprimer cette ligne?',
    //   text: 'Vous ne pourrez pas récupérer cet enregistrement!',
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'oui, supprimer!',
    //   cancelButtonText: 'Non, laisser'
    // }).then((result) => {
    //   if (result.value) {
    //     Swal(
    //       'Supprimé!',
    //       'Enregistrement supprimé.',
    //       'success'
    //     )
    //     this.subsidiaryFunctionService.DeleteSubsidiaryFunction (item).subscribe(
    //       res => {
    //         this.subsidiaryFunctionService. GetAllSubsidiaryFunctions ().subscribe(
    //           res=>{
    //             this.subsidiaryFunctionService.listSubsidiaryFunctions=res as any[]
    //           }
    //         );
    //       },
        
    //     )
      
    //   } 
    //   // else if ( result.dismiss === Swal.DismissReason.cancel
    //   //   ) {
    //   //   Swal(
    //   //     'Annuler',
    //   //     'Enregistrement gardé :)',
    //   //     'error'
    //   //   )
    //   // }
    // })

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
        this.providerTypeProviderService.DeleteProvider_ProviderType(provider_ProviderType).subscribe(
          res=>{
            console.log(res)
          //  this.toastr.error('Elément Supprimé!')
            this.providerTypeProviderService.GetAllProvider_ProviderTypes().subscribe(
              res=>{
            this.providerTypeProviderService.ListAllProviderTypeProviders=res as [];
              }
            )
          }
        )
      
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      }
      
      // else if (result.dismiss === Swal.DismissReason.cancel) {
      //   Swal.fire(
      //     'Cancelled',
      //     'Your imaginary file is safe :)',
      //     'error'
      //   )
      // }
    })

    

    
//     Swal({
//       title: 'Etes-vous sûr de vouloir supprimer cette ligne?',
//       text: 'Vous ne pourrez pas récupérer cet enregistrement!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'oui, supprimer!',
//       cancelButtonText: 'Non, laisser'
//     }).then((result) => {
//       if (result.value) {
//         Swal(
//           'Supprimé!',
//           'Enregistrement supprimé.',
//           'success'
//         )
//         this.typeSubsidiaryService.DeleteType_Subsidiary(typeSubsidiaryId).subscribe(
//           res=>{
//             console.log(res)
//           //  this.toastr.error('Elément Supprimé!')
//             this.typeSubsidiaryService.GetAllType_Subsidiaries().subscribe(
//               res=>{
//             this.typeSubsidiaryService.ListAllType_Subsidiaries=res as Type_Subsidiary[];
//               }
//             )
//           }
//         )
//         }

// }
   }
  }