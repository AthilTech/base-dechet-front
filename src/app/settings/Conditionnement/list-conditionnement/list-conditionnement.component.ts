import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Conditionnement } from 'src/app/core/models/conditionnement.model';
import { ConditionementTypeService } from 'src/app/core/services/conditionement-type.service';
import { ConditionnementService } from 'src/app/core/services/conditionnement.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-conditionnement',
  templateUrl: './list-conditionnement.component.html',
  styleUrls: ['./list-conditionnement.component.css']
})
export class ListConditionnementComponent implements OnInit {


  constructor(public conditionnementService: ConditionnementService, public conditionementTypeService: ConditionementTypeService,) { }

  ngOnInit() {

    this.conditionnementService.getListConditionnement().subscribe(
      res => {
        this.conditionnementService.ListConditionnement = res as Conditionnement[];
      },
      err => {
        console.log(err);
      }
    );
  }
  onAddConditionnementModal() {
    for (let i = (this.conditionnementService.orderForm.get('items') as FormArray).controls.length - 1; i >= 0; i--) {
      (this.conditionnementService.orderForm.get('items') as FormArray).removeAt(i)
    }
    this.conditionnementService.resetConditionnement();
    this.conditionnementService.getListConditionnement();
    this.conditionnementService.formConditionnement.enable();

  }

  onUpdateConditionnement(item: Conditionnement) {
    this.populateConditionnementForm(item);
    this.conditionnementService.formConditionnement.enable();

  }

  populateConditionnementForm(conditionnement: Conditionnement) {
    this.conditionnementService.formConditionnement.reset({
      conditioningId: conditionnement.conditioningId,
      conditioningLabel: conditionnement.conditioningLabel,
      fkConditioningType: conditionnement.fkConditioningType,
    });
  }

  onDeleteConditionnement(conditioning) {

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


        this.conditionnementService.deleteConditionnement(conditioning).subscribe(
          res => {
            console.log(res);
            this.conditionnementService.getListConditionnement().subscribe(
              res => {
                console.log(res);
                this.conditionnementService.ListConditionnement = res as Conditionnement[]
                //this.toastr.error('Elément supprimé avec succée!') 
              }
            );
          })


      }
    })
  }
}
