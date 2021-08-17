import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Type } from 'src/app/core/models/type';
import { TypeService } from 'src/app/core/services/type.service';
import Swal from 'sweetalert2';
import { AddOrEditTypeComponent } from '../add-or-edit-type/add-or-edit-type.component';

@Component({
  selector: 'app-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.css']
})
export class ListTypeComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(public typeService: TypeService, public modalService: BsModalService) { }

  ngOnInit() {
    this.typeService.GetAllSousTypeGroupedByTypes().subscribe(res => 
      { this.typeService.listSousTypeGroupedByType = res as Type[] }
      )
  }

  addSubType() {
    this.typeService.showInput = true
    this.typeService.addSubType = true;
    //  debugger
  }
  AddType() {
    this.typeService.addSubType = false
    this.typeService.openModalForUpdate = false
    console.log(this.typeService.openModalForUpdate)


   // this.typeService.resetTypeForm();
    this.bsModalRef = this.modalService.show(AddOrEditTypeComponent, {
      class: 'modal-dialog-centered ', ignoreBackdropClick: true

      // class: 'modal-dialog-centered modal-xl', ignoreBackdropClick: true

    })
  }

  onUpdateType(type) {
    this.typeService.openModalForUpdate = true;
    console.log(type)
    //debugger
    if (type.fK_Type != null) {

      this.typeService.addSubType = true;
      //debugger


    } else if (type.fK_Type == null) {

      this.typeService.addSubType = false;
      //debugger
    }

    //debugger
    // if (type.goalValue != 0) {
    //   this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].miseEnDecharge.setValue(true)
    // }

    this.populateTypeForm(type)
    this.bsModalRef = this.modalService.show(AddOrEditTypeComponent)
  }

  setSubTypeForUpdate() {

    this.typeService.setSubTypeForUpdate = true

  }
  populateTypeForm(type) {
    //debugger
    this.typeService.selectedType = type
    //  debugger
    this.typeService.addOrEditType_SubsidiaryForm.reset({
      type_SubsidiaryId: type.type_SubsidiaryId,
      fK_Subsidiary: type.subsidiaryId,


    });
    this.typeService.addOrEditType_SubsidiaryForm.controls.type.reset({
      typeId: type.typeId,
      typeLabel: type.typeLabel,
     // fK_Conditioning: type.fK_Conditioning,
    //  fK_ManagementMode: type.fK_ManagementMode,
      fK_Nature: type.fK_Nature,
      fK_Type: type.fK_Type,
     // miseEnDecharge: type.miseEnDecharge

    });
    // this.typeService.addOrEditType_SubsidiaryForm.controls.goal.reset({
    //   goalId: type.fK_Goal,
    //   goalValue: type.goalValue,
    //   date: type.date,
    //   isActive: true,

    // });


    //debugger
  }

  SetFk_Type(typeId: string) {
    this.typeService.fk_type = typeId
    this.typeService.addSubType = true;
    //debugger

    (this.typeService.addOrEditType_SubsidiaryForm.get('type') as FormGroup)
      .
      patchValue({
        fK_Type: typeId

      })
    console.log(typeId + "typeId")
    // debugger

  }
  onDeleteTypeWithSousType(type) {
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

        this.typeService.DeleteTypeWithSousTypes(type.typeId, type.fK_Goal).subscribe(
          res => {
            this.typeService.GetAllSousTypeGroupedByTypes().subscribe(
              res => {
                this.typeService.listSousTypeGroupedByType = res as Type[]
              }
            );
          },

        )



      }
    })







  }
  onDeleteType(typeId) {
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

        this.typeService.deleteType(typeId).subscribe(
          res => {
            this.typeService.GetAllSousTypeGroupedByTypes().subscribe(
              res => {
                this.typeService.listSousTypeGroupedByType = res as Type[]
              }
            );
          },

        )



      }
    })


  }
  // else if ( result.dismiss === Swal.DismissReason.cancel
  //   ) {
  //   Swal(
  //     'Annuler',
  //     'Enregistrement gardé :)',
  //     'error'
  //   )
  // }
  //})



  //   }
  // }



}
