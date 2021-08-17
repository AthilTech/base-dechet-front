import { Component, OnInit } from '@angular/core';
import { CoastsType } from 'src/app/core/models/coasts-type';
import { CoastsTypeService } from 'src/app/core/services/coasts-type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-coasts-type',
  templateUrl: './list-coasts-type.component.html',
  styleUrls: ['./list-coasts-type.component.css']
})
export class ListCoastsTypeComponent implements OnInit {

  constructor(public coastsTypeService: CoastsTypeService) { }

  ngOnInit() {

    this.coastsTypeService.GetAllCoastsTypes().subscribe(
      res => {
        this.coastsTypeService.ListCoastsTypes = res as CoastsType[];
      },
      err => {
        console.log(err);
      }
    );
  }
  onAddCoastsTypeModal() {
    this.coastsTypeService.resetCoastsTypeForm();
    this.coastsTypeService.GetAllCoastsTypes();
    this.coastsTypeService.CoastsTypeForm.enable();
  }

  onUpdateCoastsType(item: CoastsType) {
    this.populateCoastsTypeForm(item);
    this.coastsTypeService.CoastsTypeForm.enable();

  }

  populateCoastsTypeForm(coastType: CoastsType) {
    this.coastsTypeService.CoastsTypeForm.reset({
      coastsTypeId: coastType.coastsTypeId,
      coastsTypeLabel: coastType.coastsTypeLabel,
      isActif: coastType.isActif,
    });
  }

  onDeleteCoastsType(coastType) {
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

debugger
        this.coastsTypeService.DeleteCoastsType(coastType).subscribe(
          res => {
            console.log(res);
            this.coastsTypeService.GetAllCoastsTypes().subscribe(
              res => {
                console.log(res);
                this.coastsTypeService.ListCoastsTypes = res as CoastsType[]
               
              }
            );
          })


      }
    })
  }

}
