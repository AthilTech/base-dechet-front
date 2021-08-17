import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Dechet } from 'src/app/core/models/dechet.model';
import { ModeGestion } from 'src/app/core/models/mode-gestion.model';
import { Nature } from 'src/app/core/models/nature.model';
import { Subsidiary } from 'src/app/core/models/subsidiary';
import { Type } from 'src/app/core/models/type.model';
import { ModeGestionService } from 'src/app/core/services/mode-gestion.service';
import { NatureService } from 'src/app/core/services/nature.service';
import { SubsidiaryService } from 'src/app/core/services/subsidiary.service';
import { TrackingSheetService } from 'src/app/core/services/trackingSheet.service';
import { TypeSubsidiaryService } from 'src/app/core/services/type-subsidiary.service';
import { TypeService } from 'src/app/core/services/type.service';
import Swal from 'sweetalert2';
import { AddTrackingSheetComponent } from '../add-tracking-sheet/add-tracking-sheet.component';

@Component({
  selector: 'app-list-tracking-sheet',
  templateUrl: './list-tracking-sheet.component.html',
  styles: [
  ]
})
export class ListTrackingSheetComponent implements OnInit {
  bsModalRef:BsModalRef;
ListDistinctSectors : Array<string>= new Array();
ListSubsidiariesBySectorLabel : Array<Subsidiary>= new Array();
listNatures : Array<Nature>= new Array();
listSubTypes : Array<Type>= new Array();
ListModeGestion : Array<ModeGestion>= new Array();
ListDechets : Array<Dechet>= new Array();
selectSubsidiary: Subsidiary;
//trackingSheetForm: FormGroup;
dechetForm = this.fb.group({
  trackingSheetFormArray: this.fb.array([])
})
  constructor(public subsidiaryService: SubsidiaryService , public natureService : NatureService, 
    public typeSubsidiaryService : TypeSubsidiaryService , public typeService : TypeService,
    public modeGestionServiceService : ModeGestionService,  public modalService:BsModalService , public fb : FormBuilder , public trackingSheetService  : TrackingSheetService) { 

      // this.trackingSheetForm = this.fb.group({
      //   dechet: this.fb.array([])
      // });


    }


  ngOnInit(): void {
    var FK_Provider;
    this.trackingSheetService.GetDechetsByProviderId(FK_Provider)
  }
  onAddDechet() {
    this.bsModalRef = this.modalService.show(AddTrackingSheetComponent, {
      class: 'modal-dialog-centered  modal-xl w-100 ' ,   ignoreBackdropClick: true
    })
  
  
  }

  onUpdateRanking(dechet:Dechet){
    //this.populateRankingForm(ranking)
    this.bsModalRef = this.modalService.show(AddTrackingSheetComponent)
  }

 
  onDeleteScenario(dechetId) {



    Swal.fire({
      toast: true,
      title: 'Voulez-vous vraiment supprimer?',
      text: 'Vous ne pourrez pas récupérer cet enregistrement!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Non, garde-le'
    }).then((result) => {
      if (result.value) {

        this.trackingSheetService.DeleteDechet(dechetId).subscribe(
          res => {

            if (res as string == 'Delete Done') {
              Swal.fire(
                {
                  toast: true,
                  title: 'L Enregistrement a été supprimé !',
                  text: '',
                  icon: 'success',
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000
                }

              )
              var FK_Provider;
              this.trackingSheetService.GetDechetsByProviderId(FK_Provider)
            }

          },
          err => {
            Swal.fire({
              toast: true,
              title: 'Vous ne pouvez pas supprimer cet enregistrement !',
              text: '',
              icon: 'error',
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            })
          }

        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
            toast: true,
            title: 'Annulé, Votre enregistrement est en sécurité !',
            text: '',
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          }
        )
      }
    })



  }





}
