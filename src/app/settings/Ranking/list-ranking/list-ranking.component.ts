import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Ranking } from 'src/app/core/models/ranking';
import { RankingService } from 'src/app/core/services/ranking.service';
import Swal from 'sweetalert2';
import { AddOrEditRankingComponent } from '../add-or-edit-ranking/add-or-edit-ranking.component';

@Component({
  selector: 'app-list-ranking',
  templateUrl: './list-ranking.component.html',
  styles: []
})
export class ListRankingComponent implements OnInit {
  bsModalRef:BsModalRef;
   constructor(public  rankingService : RankingService,
    public modalService:BsModalService) { }

  ngOnInit() {
    this.rankingService.GetAllRankings().subscribe(
      res=>{
        this.rankingService.ListOAllRankings=res as Ranking[]
      }
    )
  }

  AddRanking(){
    this.rankingService.resetaddOrEditRankingCriterionForm();
    this.bsModalRef = this.modalService.show(AddOrEditRankingComponent)
  }

  onUpdateRanking(ranking:Ranking){
    this.populateRankingForm(ranking)
    this.bsModalRef = this.modalService.show(AddOrEditRankingComponent)
  }



  populateRankingForm(ranking:Ranking){
    this.rankingService.addOrEditRankingForm.reset({
      rankingId:ranking.rankingId,
      minValue:ranking.minValue,
      maxValue:ranking.maxValue,
      rankingLabel:ranking.rankingLabel,
      isActive: ranking.isActive
    });

  }

  onDeleteRanking(ranking)
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
        this.rankingService.DeleteRanking(ranking).subscribe(
          res=>{
            console.log(res)
            this.rankingService.GetAllRankings().subscribe(
              res=>{
            this.rankingService.ListOAllRankings=res as [];
              }
            )
          }
        )

      }
    })
   
  }

}
