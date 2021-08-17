import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Coasts, CoastsDTO } from 'src/app/core/models/coasts';
import { Nature } from 'src/app/core/models/nature.model';
import { TypeFraisNature, TypeFraisNatureDTO } from 'src/app/core/models/type-frais-nature.model';
import { CoastsService } from 'src/app/core/services/coasts.service';
import { NatureService } from 'src/app/core/services/nature.service';
import { TypeFraisNatureService } from 'src/app/core/services/type-frais-nature.service';

@Component({
  selector: 'app-add-or-edit-frais',
  templateUrl: './add-or-edit-frais.component.html',
  styleUrls: ['./add-or-edit-frais.component.css']
})
export class AddOrEditFraisComponent implements OnInit {

  constructor(public fraisService: CoastsService, public typeFraisNatureService: TypeFraisNatureService, public natureService: NatureService, public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.typeFraisNatureService.GetAllTypeFraisNature().subscribe(
      res => {
        this.typeFraisNatureService.ListTypeFraisNature = res as TypeFraisNature[]
      }
    )
    this.natureService.getListNature().subscribe(res => {
      this.natureService.ListNature = res as Nature[]
    })
  }

  getlistTypeFraisByNature(id: any) {

    this.typeFraisNatureService.getListTypeFraisByNature(id.value).subscribe(
      res => {
        this.typeFraisNatureService.ListTypeFrais = res as TypeFraisNatureDTO[];
      }
    )

  }

  onSubmit() {
    if (this.fraisService.addOrEditCoastsForm.controls.coastsId.value == '00000000-0000-0000-0000-000000000000') {
      this.fraisService.postCoasts().subscribe(
        res => {

          this.fraisService.resetaddOrEditCoastsForm();
          this.fraisService.GetAllCoasts().subscribe(
            res => {
              console.log(res);
              this.fraisService.ListAllCoastsDTO = res as CoastsDTO[]
            }
          );
        }

      );

    }

    this.fraisService.GetAllCoasts().subscribe(
      res => {

        this.fraisService.ListAllCoastsDTO = res as CoastsDTO[]
      }
    );

  }

}