import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Ranking } from 'src/app/core/models/ranking';
import { RankingService } from 'src/app/core/services/ranking.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-or-edit-ranking',
  templateUrl: './add-or-edit-ranking.component.html',
  styles: []
})
export class AddOrEditRankingComponent implements OnInit {

  constructor(public rankingService:RankingService,public bsModalRef: BsModalRef) { }

  ngOnInit() {
  
  }

  onSubmit(){
    this.rankingService.addOrEditRankingForm.controls.isActive.setValue(true)
    if (this.rankingService.addOrEditRankingForm.value.rankingId == '00000000-0000-0000-0000-000000000000') {
      this.rankingService.postRanking().subscribe(
        res => {
          console.log(res)
          if(res =="Added done"){
            Swal.fire({
                   position: 'top-end',
                   text: 'l\'ajout est effectué avec succès',
                   icon: 'success',
                   toast: true,
                   timer: 3000,
                   timerProgressBar: true,
                   showConfirmButton: false
                 });
       
                 }
                 if(res == "Elément Existe déjà!"){
                   Swal.fire({
                     position: 'top-end',
                     text: 'Elément Existe déjà!',
                     icon: 'warning',
                     toast: true,
                     timer: 3000,
                     timerProgressBar: true,
                     showConfirmButton: false
                   });
       
                 }
          this.rankingService.resetaddOrEditRankingCriterionForm();
          this.rankingService.GetAllRankings().subscribe(
            res => {
              this.rankingService.ListOAllRankings = res as Ranking[]

            }
          )
        });
      this.rankingService.resetaddOrEditRankingCriterionForm()
  
    }
    else {
      this.rankingService.updateRanking().subscribe(
        res => {
          Swal.fire({
            position: 'top-end',
            text: 'la modification  est effectuée avec succès',
            icon: 'success',
            toast: true,
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
          });
          this.rankingService.GetAllRankings().subscribe(
            res => {
              this.rankingService.ListOAllRankings = res as Ranking[]
            }
          )
        });
        this.bsModalRef.hide();
    }
    this.rankingService.GetAllRankings().subscribe(
      res => {
        this.rankingService.ListOAllRankings = res as Ranking[]
      }
    )
    
  }

}
