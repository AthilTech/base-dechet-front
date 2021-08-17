import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Nature } from 'src/app/core/models/nature.model';
import { Type } from 'src/app/core/models/type.model';
import { NatureService } from 'src/app/core/services/nature.service';
import { TypeService } from 'src/app/core/services/type.service';
import Swal from 'sweetalert2';
import { DetailTypeComponent } from '../detail-type/detail-type.component';

@Component({
  selector: 'app-list-nature',
  templateUrl: './list-nature.component.html',
  styleUrls: ['./list-nature.component.css']
})
export class ListNatureComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(public natureService: NatureService, public typeService: TypeService, private modalService: BsModalService) { }

  ngOnInit() {

    this.natureService.getListNature().subscribe(
      res => {
        this.natureService.ListNature = res as Nature[];
      },
      err => {
        console.log(err);
      }
    );
  }

  onAddNatureModal() {
    this.natureService.resetNatureForm();
    this.natureService.getListNature();
    this.natureService.formNature.enable();
  }

  onUpdateNature(item: Nature) {
    this.populateNatureForm(item);
    this.natureService.formNature.enable();

  }

  populateNatureForm(nature: Nature) {
    this.natureService.formNature.reset({
      natureId: nature.natureId,
      natureLabel: nature.natureLabel,

    });
  }

  onDeleteNature(nature) {
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


        this.natureService.deleteNatureDechet(nature).subscribe(
          res => {
            console.log(res);
            this.natureService.getListNature().subscribe(
              res => {
                console.log(res);
                this.natureService.ListNature = res as Nature[]
                //this.toastr.error('Elément supprimé avec succée!') 
              }
            );
          })


      }
    })
  }

  GetTypesByNature(nature) {
    this.typeService.GetTypesByNature(nature)
      .subscribe(res => { this.typeService.listSousTypeGroupedByNature = res as Type[] })
  }

  openModalTypesByNature(nature) {
    this.typeService.listSousTypeGroupedByNature = new Array()
    this.GetTypesByNature(nature);
    this.bsModalRef = this.modalService.show(DetailTypeComponent, {
      class: 'modal-lg modal-dialog-centered', ignoreBackdropClick: false
    });
  }



}
