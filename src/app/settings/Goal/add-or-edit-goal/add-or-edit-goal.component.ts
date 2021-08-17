import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/core/models/goal.model';
import { GoalService } from 'src/app/core/services/goal.service';

@Component({
  selector: 'app-add-or-edit-goal',
  templateUrl: './add-or-edit-goal.component.html',
  styleUrls: ['./add-or-edit-goal.component.css']
})
export class AddOrEditGoalComponent implements OnInit {

  constructor(public goalService:GoalService ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if( this.goalService.formGoal.controls.goalId.value == '00000000-0000-0000-0000-000000000000')
    
     { this.goalService.postGoal().subscribe(
      res=>{
       // if (res as string == 'Ponderation existe'){
         // this.toastr.error('Ponderation existe !') 
       // }
        
       // else {
          this.goalService.resetGoalForm();
            this.goalService.getListGoal().subscribe(
            res=>{
              console.log(res);
              this.goalService.ListGoal=res as Goal[] 
             // this.toastr.success('Elément Ajouté avec succée!') 
             }
              );
        }
            
      //  }
        );

      }
      
    // else{

    //   this.goalService.updateGoal().subscribe(
    //     res=>{ 
    //      // if (res as string == 'Ponderation existe'){
    //         //this.toastr.error('Ponderation existe !') 
    //      // }
    //    // else{ 
    //       this.goalService.getListGoal().subscribe(
    //         res=>{
    //           console.log(res);
    //           this.goalService.ListGoal=res as Goal[]
    //          // this.toastr.warning('Elément Modifié avec succée!')
    //        } 
    //        );
    //         }
         
        
    //    // }
    //   )

    // }
    this.goalService.getListGoal().subscribe(
      res=>{
        console.log(res);
        this.goalService.ListGoal=res as Goal[]   }
        );

  }

}
