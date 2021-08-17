import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/core/models/goal.model';
import { GoalService } from 'src/app/core/services/goal.service';

@Component({
  selector: 'app-list-goal',
  templateUrl: './list-goal.component.html',
  styleUrls: ['./list-goal.component.css']
})
export class ListGoalComponent implements OnInit {
  constructor(public goalService:GoalService) { }

  ngOnInit(){
    
    this.goalService.getListGoal().subscribe(
      res => {
        this.goalService.ListGoal = res as Goal[];
      },
      err => {
        console.log(err);
      }
    );
  }
  onAddGoalModal(){
    this.goalService.resetGoalForm();
    this.goalService.getListGoal();
    this.goalService.formGoal.enable();
  }

  onUpdateGoal(item:Goal){
    this.populateGoalForm(item);
    this.goalService.formGoal.enable();
  
}

populateGoalForm(goal:Goal){
  this.goalService.formGoal.reset({
    goalId:goal.goalId,
    goalValue:goal.goalValue,
    date:goal.date,
  });
  }
  
  onDeleteGoal(goalId){
 
     
        this.goalService.deleteGoal(goalId).subscribe(
          res =>{
            console.log(res);
            this.goalService.getListGoal().subscribe(
              res=>{
                console.log(res);
                this.goalService.ListGoal=res as Goal[]
                //this.toastr.error('Elément supprimé avec succée!') 
              }
            );
          })
  
  }
}

