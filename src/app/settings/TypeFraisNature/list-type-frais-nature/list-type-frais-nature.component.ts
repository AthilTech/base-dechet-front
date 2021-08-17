import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TypeFraisNature } from 'src/app/core/models/type-frais-nature.model';
import { CoastsTypeService } from 'src/app/core/services/coasts-type.service';
import { NatureService } from 'src/app/core/services/nature.service';
import { TypeFraisNatureService } from 'src/app/core/services/type-frais-nature.service';
import Swal from 'sweetalert2';
import { AddOrEditTypeFraisNatureComponent } from '../add-or-edit-type-frais-nature/add-or-edit-type-frais-nature.component';

@Component({
  selector: 'app-list-type-frais-nature',
  templateUrl: './list-type-frais-nature.component.html',
  styleUrls: ['./list-type-frais-nature.component.css']
})
export class ListTypeFraisNatureComponent implements OnInit {
 
  bsModalRef:BsModalRef;

  constructor(public typeFraisNatureService:TypeFraisNatureService, public typeFraisService : CoastsTypeService, public natureService : NatureService  ,  public  modalService:BsModalService) { }

  ngOnInit(): void {
    this.typeFraisNatureService.GetAllTypeFraisNature().subscribe(
      res=>{
        this.typeFraisNatureService.ListTypeFraisNature = res as TypeFraisNature []
      }
    )
 }

 AffectTypeFraisNature(){
    this.typeFraisNatureService.resetTypeFraisNatureForm();
    this.typeFraisService.ListCoastsTypes =[]
    this.natureService.ListNature=[]
    this.bsModalRef = this.modalService.show(AddOrEditTypeFraisNatureComponent)
  }


  onDeleteTypeFraisNature(typeSubsidiaryProvider)
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
    //   debugger
       this.typeFraisNatureService.DeleteTypeFraisNature(typeSubsidiaryProvider).subscribe(
         res=>{
           console.log(res)
         // this.toastr.error('Elément Supprimé!')
           this.typeFraisNatureService.GetAllTypeFraisNature().subscribe(
             res=>{
           this.typeFraisNatureService.ListTypeFraisNature=res as TypeFraisNature [];
             }
           )
         }
       )

     }
     
   
   })

  }
}



