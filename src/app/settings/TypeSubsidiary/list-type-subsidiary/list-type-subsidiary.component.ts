import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Type_Subsidiary } from 'src/app/core/models/type-subsidiary';
import { TypeSubsidiaryService } from 'src/app/core/services/type-subsidiary.service';
import { TypeService } from 'src/app/core/services/type.service';
import Swal from 'sweetalert2';
import { AddOrEditTypeSubsidiaryComponent } from '../add-or-edit-type-subsidiary/add-or-edit-type-subsidiary.component';
import { DetailSubTypesSubsidiaryComponent } from '../detail-sub-types-subsidiary/detail-sub-types-subsidiary.component';

@Component({
  selector: 'app-list-type-subsidiary',
  templateUrl: './list-type-subsidiary.component.html',
  styles: []
})
export class ListTypeSubsidiaryComponent implements OnInit {
  bsModalRef: BsModalRef;

  ListAllNatures = []
  constructor(public fb: FormBuilder, public typeSubsidiaryService: TypeSubsidiaryService, public typeService: TypeService,
    public modalService: BsModalService) { }

  ngOnInit() {
    this.typeSubsidiaryService.GetAllType_Subsidiaries().subscribe(
      res => {
        this.typeSubsidiaryService.ListAllType_Subsidiaries = res as [];
        this.typeSubsidiaryService.GetAllNatures().subscribe(res => this.ListAllNatures = res as [])



      }
    )
  }
  get TypeSubsidiaryFormArray() {
    return this.typeSubsidiaryService.addOrEditSubType_SubsidiaryForm.controls.Type_Subsidiary as FormArray;
  }
  ClearTypeSubsidiaryFormArray() {
    while (this.TypeSubsidiaryFormArray.length > 0) {


      this.TypeSubsidiaryFormArray.removeAt(this.TypeSubsidiaryFormArray.length - 1)
    }
  }


  onUpdateType_Subsidiary(item) {
    this.ClearTypeSubsidiaryFormArray()
    this.typeSubsidiaryService.forUpdate = true
    this.populateType_SubsidiaryForm(item);

    this.bsModalRef = this.modalService.show(AddOrEditTypeSubsidiaryComponent, {
      class: 'modal-lg modal-dialog-centered', ignoreBackdropClick: true
    });

  }


  populateType_SubsidiaryForm(item) {
    debugger
    this.typeSubsidiaryService.hiddenButtunGroup = false
    this.typeSubsidiaryService.GetListTypesByNatureId(item.natureId).subscribe(res => {
      this.typeSubsidiaryService.lisTypes = res as [];
      this.typeSubsidiaryService.GetListSubTypesByFK_Type(item.fK_Type).subscribe(res => this.typeSubsidiaryService.ListSubTypesByTypeId = res as [])
      this.typeSubsidiaryService.GetListSubTypesByFK_TypeForUpdate(item.fK_Type, item.fK_Subsidiary).subscribe(

        res => {
          this.typeSubsidiaryService.ListSubTypesByFK_TypeForUpdate = res as [];
          this.typeSubsidiaryService.ListSubTypesByFK_TypeForUpdate.forEach(element => {
            this.TypeSubsidiaryFormArray.push(this.fb.group({
              type_SubsidiaryId: element.type_SubsidiaryId,
              fK_Subsidiary: element.fK_Subsidiary,
              fK_Type: element.fK_Type,
              miseEnDecharge: false,
              fK_Conditioning: element.fK_Conditioning,
              conditioningLabel: element.conditioningLabel,
              isActive: element.isActive

            }))


          });



          //   debugger
        }
      )
      if (item.fK_Conditioning != null) {
        this.typeSubsidiaryService.selecteditem = item;
        this.typeSubsidiaryService.hiddenButtunGroup = true;
        //   debugger






      }
      if (item.fK_Goal != null) {
        this.typeSubsidiaryService.selectedgoal = item;

        debugger






      }
    })


    //  debugger
    var listSubsidiaries = [];
    this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.reset({
      type_SubsidiaryId: item.type_SubsidiaryId,
      fK_Subsidiary: item.fK_Subsidiary,
      fK_Type: item.fK_Type,
      miseEnDecharge: false,
      fK_Nature: item.natureId,
      fK_Conditioning: item.fK_Conditioning




    });

    this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal.reset({
      goalId: item.fK_Goal,
      goalValue: item.goalValue,
      addDate: new Date().getFullYear(),
      isActive: true,

      // goalId: '00000000-0000-0000-0000-000000000000',
      // goalValue: 0,
      // date: new Date(),
      // isActive: true,
    })
    if (item.fK_Goal != null) {
      let control = this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.get('miseEnDecharge')
      control.enable ? control.disable() : control.enable();

      this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.miseEnDecharge.setValue(true)

    }
    if (item.fK_Goal == null) {
      let control = this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.get('miseEnDecharge')
      control.disabled ? control.enable() : control.disable();
      this.typeSubsidiaryService.addItem = false
    }

    listSubsidiaries = item.fK_Subsidiary
    debugger
    // this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.patchValue({

    //   type_SubsidiaryId: item.type_SubsidiaryId,
    //   fK_Subsidiary: listSubsidiaries,
    //   fK_Type:item.fK_Type ,
    //   miseEnDecharge: false,
    // //  fK_Conditioning: item.fK_Conditioning,

    // })  
    debugger

  }
  // this.goalService.updateGoal (this.typeService.addOrEditType_SubsidiaryForm.controls.goal.value).subscribe(res=>{


  //   console.log(res)
  //   if(res =="Update Done"){
  //     Swal.fire({
  //            position: 'top-end',
  //            text: 'la modification est effectué avec succès',
  //            icon: 'success',
  //            toast: true,
  //            timer: 3000,
  //            timerProgressBar: true,
  //            showConfirmButton: false
  //          });

  //          }
  //          if(res == "Elément Existe déjà!"){
  //            Swal.fire({
  //              position: 'top-end',
  //              text: 'Elément Existe déjà',
  //              icon: 'warning',
  //              toast: true,
  //              timer: 3000,
  //              timerProgressBar: true,
  //              showConfirmButton: false
  //            });

  //          }
  //   this.typeService.resetTypeForm();
  //   this.typeService.GetAllSousTypeGroupedByTypes().subscribe(
  //     res => {
  //       this.typeService.listSousTypeGroupedByType = res as []

  //     }
  //   )
  // }
  // );

  AffectSubsidiaryType() {
    let control = this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.get('miseEnDecharge')
    control.disable ? control.enable() : control.disable();
    this.typeSubsidiaryService.forUpdate = false
    this.typeSubsidiaryService.addItem = true;
    this.typeSubsidiaryService.hiddenButtunGroup = false
    this.typeSubsidiaryService.hiddenConditioningButtunGroup = false

    this.typeSubsidiaryService.forUpdate = false
    this.ClearTypeSubsidiaryFormArray()


    this.typeService.ListTypes = []
    this.typeSubsidiaryService.resetaddOrEditType_SubsidiaryForm();
    this.bsModalRef = this.modalService.show(AddOrEditTypeSubsidiaryComponent, {
      class: 'modal-lg modal-dialog-centered', ignoreBackdropClick: true
    });

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

  onDeleteType_Subsidiary(typeSubsidiaryId, item) {
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
        this.typeSubsidiaryService.DeleteType_Subsidiary(typeSubsidiaryId).subscribe(
          res => {
            if (this.TypeSubsidiaryFormArray.length > 0) {
              this.typeSubsidiaryService.GetListSubTypesByFK_TypeForUpdate(item.fK_Type, item.fK_Subsidiary).subscribe(res => {
                this.typeSubsidiaryService.ListSubTypesByFK_TypeForUpdate = res as [];
                this.typeSubsidiaryService.ListSubTypesByFK_TypeForUpdate.forEach(element => {

                  this.typeSubsidiaryService.DeleteType_Subsidiary(element.type_SubsidiaryId).subscribe(res => console.log(res))
                })


              })

            }

            console.log(res)
            //  this.toastr.error('Elément Supprimé!')
            this.typeSubsidiaryService.GetAllType_Subsidiaries().subscribe(
              res => {
                this.typeSubsidiaryService.ListAllType_Subsidiaries = res as Type_Subsidiary[];
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
  OnchangeDetailsSubTypes(item) {
    this.typeService.listSousTypeGroupedByNature = new Array()
    this.typeSubsidiaryService.GetListSubTypesByFK_TypeForUpdate(item.fK_Type, item.fK_Subsidiary).subscribe(
      res => this.typeSubsidiaryService.ListSubTypesByFK_TypeForUpdate = res as []
    )
    // this.GetTypesByNature(nature);
    this.bsModalRef = this.modalService.show(DetailSubTypesSubsidiaryComponent, {
      class: 'modal-lg modal-dialog-centered', ignoreBackdropClick: false
    });


  }
}