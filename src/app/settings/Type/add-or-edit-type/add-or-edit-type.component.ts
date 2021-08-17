import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Conditionnement } from 'src/app/core/models/conditionnement.model';
import { Goal } from 'src/app/core/models/goal.model';
import { ModeGestion } from 'src/app/core/models/mode-gestion.model';
import { Nature } from 'src/app/core/models/nature.model';
import { Type_Subsidiary } from 'src/app/core/models/type-subsidiary';
import { Type } from 'src/app/core/models/type.model';
import { ConditionnementService } from 'src/app/core/services/conditionnement.service';
import { GoalService } from 'src/app/core/services/goal.service';
import { ModeGestionService } from 'src/app/core/services/mode-gestion.service';
import { NatureService } from 'src/app/core/services/nature.service';
import { SubsidiaryService } from 'src/app/core/services/subsidiary.service';
import { TypeSubsidiaryService } from 'src/app/core/services/type-subsidiary.service';
import { TypeService } from 'src/app/core/services/type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-or-edit-type',
  templateUrl: './add-or-edit-type.component.html',
  styleUrls: ['./add-or-edit-type.component.css']
})
export class AddOrEditTypeComponent implements OnInit {

  selectedConditioningLabel:string = ""
  constructor(public typeService : TypeService,public natureService :NatureService ,public conditionnementService :ConditionnementService
    ,public goalService :GoalService ,public modeGestionServiceService : ModeGestionService ,public subsidiaryService:SubsidiaryService, public bsModalRef: BsModalRef, 
    public typeSubsidiaryService: TypeSubsidiaryService
    ) { }

  ngOnInit() {
    console.log(this.typeService.openModalForUpdate)
  //  debugger
    this.subsidiaryService. GetActiveSubsidiaries ().subscribe(
      res=>{
       this.subsidiaryService.ListActiveSubsidiaries =  res as any[]
      }
    )

    this.natureService.getListNature().subscribe(
      res=>{
       this.natureService.ListNature =  res as Nature[]
      });

  }

  onSubmit(){

    if(   this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].typeId.value =='00000000-0000-0000-0000-000000000000'  ){
     var  type=new Type();
     console.log(this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].typeLabel.value)
   //  debugger
     type.TypeLabel= this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].typeLabel.value;
     type.FK_Nature= this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].fK_Nature.value;
     type.FK_Type= this.typeService.fk_type
     this.typeService.postType (type).subscribe(res=>{console.log(res);
    
    
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
                 text: 'Elément Existe déjà',
                 icon: 'warning',
                 toast: true,
                 timer: 3000,
                 timerProgressBar: true,
                 showConfirmButton: false
               });
   
             }})

             this.typeService.resetTypeForm();
             this.typeService.GetAllSousTypeGroupedByTypes().subscribe(
              res => {
                this.typeService.listSousTypeGroupedByType = res as Type[]
              }
            );
      
    }
    //console.log(this.typeService.selectedType.typeId)
   // debugger
   else{

      debugger
      var  type=new Type();
      type.FK_Type= type.FK_Type= this.typeService.fk_type
      type.TypeId=this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].typeId.value
      type.FK_Nature= this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].fK_Nature.value;
      type.TypeLabel= this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].typeLabel.value
     // debugger
      this.typeService.updateType (type).subscribe(res=>{console.log(res);
      
      
        if(res =="Update Done"){
          Swal.fire({
                 position: 'top-end',
                 text: 'la modification est effectué avec succès',
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
                   text: 'Elément Existe déjà',
                   icon: 'warning',
                   toast: true,
                   timer: 3000,
                   timerProgressBar: true,
                   showConfirmButton: false
                 });
     
               }})
 
               this.typeService.resetTypeForm();
               this.typeService.GetAllSousTypeGroupedByTypes().subscribe(
                res => {
                  this.typeService.listSousTypeGroupedByType = res as Type[]
                }
              );
       
     }
//console.log(this.typeService.addOrEditType_SubsidiaryForm.controls.goal['controls'].goalValue.value)
// if(this.typeService.addOrEditType_SubsidiaryForm.controls.goal['controls'].goalValue.value == 0){
//   (this.typeService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).removeControl('goalId');
//   this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].miseEnDecharge.setValue(false);
//   (this.typeService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).removeControl('goalValue');
//   (this.typeService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).removeControl('date');
//   (this.typeService.addOrEditType_SubsidiaryForm.controls['goal'] as FormGroup).removeControl('isActive');
//   (this.typeService.addOrEditType_SubsidiaryForm.controls['goal'] as FormGroup).removeControl('miseEnDecharge')

// }
    // if (this.typeService.addOrEditType_SubsidiaryForm.controls.type_SubsidiaryId.value == '00000000-0000-0000-0000-000000000000') {
    //   this.typeSubsidiaryService.PostType_Subsidiary (this.typeService.addOrEditType_SubsidiaryForm.value).subscribe(res=> {

    //     console.log(res)
    //     if(res =="Added done"){
    //       Swal.fire({
    //              position: 'top-end',
    //              text: 'l\'ajout est effectué avec succès',
    //              icon: 'success',
    //              toast: true,
    //              timer: 3000,
    //              timerProgressBar: true,
    //              showConfirmButton: false
    //            });
     
    //            }
    //            if(res == "Elément Existe déjà!"){   
    //              Swal.fire({
    //                position: 'top-end',
    //                text: 'Elément Existe déjà',
    //                icon: 'warning',
    //                toast: true,
    //                timer: 3000,
    //                timerProgressBar: true,
    //                showConfirmButton: false
    //              });
     
    //            }
    //     this.typeService.resetTypeForm();

        
    //     this.typeService.GetAllSousTypeGroupedByTypes().subscribe(
    //       res => {
    //         this.typeService.listSousTypeGroupedByType = res as []

    //       }
    //     )
    //   });
    //   this.bsModalRef.hide();
    // this.typeService.resetTypeForm()
    // }
  
//   else{
// var hasGoalValue=this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].miseEnDecharge.value
//    var type_subsidiary=new Type_Subsidiary();
//    type_subsidiary.fK_Subsidiary= this.typeService.addOrEditType_SubsidiaryForm.controls.fK_Subsidiary.value
//    type_subsidiary.type_SubsidiaryId= this.typeService.addOrEditType_SubsidiaryForm.controls.type_SubsidiaryId.value 
// if(this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].miseEnDecharge.value==false){

//   this.typeService.addOrEditType_SubsidiaryForm.controls.fK_Goal.setValue(null);  
// }
// else{
//    type_subsidiary.fK_Goal= this.typeService.addOrEditType_SubsidiaryForm.controls.goal['controls'].goalId.value

// }


//    type_subsidiary.fK_Type= this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].typeId.value
//    this.typeSubsidiaryService.updateType_Subsidiary (type_subsidiary).subscribe(res=> {
//       this.typeService.updateType (this.typeService.addOrEditType_SubsidiaryForm.controls.type.value).subscribe(res=>{

//         if(res =="Update Done"){
//           Swal.fire({
//                  position: 'top-end',
//                  text: 'la modification est effectué avec succès',
//                  icon: 'success',
//                  toast: true,
//                  timer: 3000,
//                  timerProgressBar: true,
//                  showConfirmButton: false
//                });
     
//                }
//                if(res == "Elément Existe déjà!"){
//                  Swal.fire({
//                    position: 'top-end',
//                    text: 'Elément Existe déjà',
//                    icon: 'warning',
//                    toast: true,
//                    timer: 3000,
//                    timerProgressBar: true,
//                    showConfirmButton: false
//                  });
     
//                }
// if(hasGoalValue){

//   this.goalService.updateGoal (this.typeService.addOrEditType_SubsidiaryForm.controls.goal.value).subscribe(res=>{


//           console.log(res)
//           if(res =="Update Done"){
//             Swal.fire({
//                    position: 'top-end',
//                    text: 'la modification est effectué avec succès',
//                    icon: 'success',
//                    toast: true,
//                    timer: 3000,
//                    timerProgressBar: true,
//                    showConfirmButton: false
//                  });
       
//                  }
//                  if(res == "Elément Existe déjà!"){
//                    Swal.fire({
//                      position: 'top-end',
//                      text: 'Elément Existe déjà',
//                      icon: 'warning',
//                      toast: true,
//                      timer: 3000,
//                      timerProgressBar: true,
//                      showConfirmButton: false
//                    });
       
//                  }
//           this.typeService.resetTypeForm();
//           this.typeService.GetAllSousTypeGroupedByTypes().subscribe(
//             res => {
//               this.typeService.listSousTypeGroupedByType = res as []
    
//             }
//           )
//         }
//         );
// }
// else{

//   console.log(res)
//   if(res =="Added done"){
//     Swal.fire({
//            position: 'top-end',
//            text: 'l\'ajout est effectué avec succès',
//            icon: 'success',
//            toast: true,
//            timer: 3000,
//            timerProgressBar: true,
//            showConfirmButton: false
//          });

//          }
//          if(res == "Elément Existe déjà!"){
//            Swal.fire({
//              position: 'top-end',
//              text: 'Elément Existe déjà',
//              icon: 'warning',
//              toast: true,
//              timer: 3000,
//              timerProgressBar: true,
//              showConfirmButton: false
//            });

//          }
//   this.typeService.resetTypeForm();
//   this.typeService.GetAllSousTypeGroupedByTypes().subscribe(
//     res => {
//       this.typeService.listSousTypeGroupedByType = res as []

//     }
//   )
// }
      
//         this.bsModalRef.hide();
//       this.typeService.resetTypeForm()
          
//         })
      

//       })
   

//   }
//   (this.typeService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).addControl('goalId', new FormControl());
//   (this.typeService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).addControl('goalValue', new FormControl());
//   (this.typeService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).addControl('date', new FormControl());
//   (this.typeService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).addControl('isActive', new FormControl());
//   (this.typeService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).addControl('miseEnDecharge', new FormControl());
  
// this.typeService.addSubType=false;
  }  
   

  

}
