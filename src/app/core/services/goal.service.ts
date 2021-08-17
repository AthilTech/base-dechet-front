import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Goal } from '../models/goal.model';
import { TypeSubsidiaryService } from './type-subsidiary.service';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  constructor(private fb: FormBuilder, private http: HttpClient , public typeSubsidiaryService:TypeSubsidiaryService) { }

  ListGoal: Goal[];
  goal: Goal;
  formGoal = this.fb.group({
    goalId: ['00000000-0000-0000-0000-000000000000'],
    goalValue: ['', [Validators.required]],
    date: ['', [Validators.required]],
    isActive: true,
  });

  getListGoal() {
    return this.http.get(environment.apiURL + '/Goal/GetAllGoals');
  }
  postGoal() {
    return this.http.post(environment.apiURL + '/Goal/PostGoal', this.formGoal.value);
  }
  updateGoal(goal) {
    debugger
    return this.http.put(environment.apiURL + '/Goal/PutGoal', goal, { responseType: "text" });
  }
  putGoal() {
    debugger
    return this.http.put(environment.apiURL + '/Goal/PutGoal', this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal.value, { responseType: "text" });
  }
  deleteGoal(goalId) {
    return this.http.delete(environment.apiURL + '/Goal/DeleteGoal?goalId=' + goalId, { responseType: "text" });
  }
  resetGoalForm() {
    this.formGoal.reset({
      goalId: '00000000-0000-0000-0000-000000000000',
      goalValue: '',
      date: '',
      isActive: true,
    });
  }
}
    
