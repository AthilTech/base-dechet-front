import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Coasts, CoastsDTO } from 'src/app/core/models/coasts';
import { CoastsService } from 'src/app/core/services/coasts.service';
import Swal from 'sweetalert2';
import { AddOrEditFraisComponent } from '../add-or-edit-frais/add-or-edit-frais.component';

@Component({
  selector: 'app-list-frais',
  templateUrl: './list-frais.component.html',
  styleUrls: ['./list-frais.component.css']
})
export class ListFraisComponent implements OnInit {
  bsModalRef:BsModalRef;

  constructor( public fraisService : CoastsService,  public modalService:BsModalService) { }
  ngOnInit() {
    this.fraisService.GetAllCoasts().subscribe(
      res=>{
        this.fraisService.ListAllCoastsDTO = res as CoastsDTO[]
      }
    )

 }

 AffectFrais(){
    this.fraisService.resetaddOrEditCoastsForm();
    this.bsModalRef = this.modalService.show(AddOrEditFraisComponent)
  }



  onDeleteFrais(provider_ProviderType)
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
       this.fraisService.DeleteCoasts(provider_ProviderType).subscribe(
         res=>{
           console.log(res)
         
           this.fraisService.GetAllCoasts().subscribe(
             res=>{
           this.fraisService.ListAllCoastsDTO=res as CoastsDTO [];
             }
           )
         }
       )
     
     
     }
     
   })
  }
 }
