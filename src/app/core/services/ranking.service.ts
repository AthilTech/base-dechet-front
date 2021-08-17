import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Ranking } from '../models/ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  ListOAllRankings: Ranking[] = new Array();

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  addOrEditRankingForm = this.fb.group({
    rankingId: ['00000000-0000-0000-0000-000000000000'],
    minValue: ['', [Validators.required]],
    maxValue: ['', [Validators.required]],
    rankingLabel: ['', [Validators.required]],
    isActive: [true]
  });

  GetAllRankings() {
    return this.http.get(environment.apiURL + '/Ranking/GetAllRanking');
  }

  postRanking() {
    return this.http.post(environment.apiURL + '/Ranking/PostRanking', this.addOrEditRankingForm.value, { responseType: "text" });
  }

  updateRanking() {
    return this.http.put(environment.apiURL + '/Ranking/PutRanking', this.addOrEditRankingForm.value, { responseType: "text" });
  }

  DeleteRanking(ranking) {
    ranking.isActive = false;
    return this.http.put(environment.apiURL + '/Ranking/PutRanking', ranking, { responseType: "text" });
  }

  // DeleteRanking(rankingId) {
  //   return this.http.delete(environment.apiURL + '/Ranking/DeleteRanking?rankingId='+rankingId, { responseType: "text" });
  // }

  resetaddOrEditRankingCriterionForm() {
    this.addOrEditRankingForm.reset({
      rankingId: '00000000-0000-0000-0000-000000000000',
      minValue: '',
      maxValue: '',
      rankingLabel: '',
      isActive: true
    });
  }


}
