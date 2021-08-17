import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Goal } from 'src/app/core/models/goal';
import { Type } from 'src/app/core/models/type';
import { Type_Subsidiary } from 'src/app/core/models/type-subsidiary';
import { GoalService } from 'src/app/core/services/goal.service';
import { SubsidiaryService } from 'src/app/core/services/subsidiary.service';
import { TypeSubsidiaryService } from 'src/app/core/services/type-subsidiary.service';
import { TypeService } from 'src/app/core/services/type.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-or-edit-type-subsidiary',
  templateUrl: './add-or-edit-type-subsidiary.component.html',
  styles: []
})
export class AddOrEditTypeSubsidiaryComponent implements OnInit {
  lisNatures: any[] = new Array()
  lisSubsidiary: any[] = new Array()
  ListConditionnement: any[] = new Array()
 
  selectedConditioningLabel="";

  constructor(public goalService :GoalService , public fb: FormBuilder, public typeSubsidiaryService: TypeSubsidiaryService, public typeService: TypeService, public subsidiaryService: SubsidiaryService, public bsModalRef: BsModalRef) { }

  ngOnInit() {

    this.typeSubsidiaryService.GetAllNatures().subscribe(res =>
       this.lisNatures = res as []
       
       )
    this.subsidiaryService.GetActiveSubsidiaries().subscribe(
      res => {
        this.subsidiaryService.ListActiveSubsidiaries = res as any[]
      }
    )
    this.typeService.getDistinctListConditionnement().subscribe(
      res=>{
       this.ListConditionnement =  res as []
      }
    );
  }
  selectedConditioning(selectedValue){
    this.selectedConditioningLabel=selectedValue
    console.log(selectedValue)
    this.typeService.GetAssociatedConditioningTypes(selectedValue).subscribe(
      
      res=>
     this.typeService.ListAssociatedConditioningTypes=res as []
      
      )
    
    
    //debugger
    
    
      }

      get TypeSubsidiaryFormArray() {
        return this.typeSubsidiaryService.addOrEditSubType_SubsidiaryForm.controls.Type_Subsidiary as FormArray;
      }

  getListTypes(event) {
    console.log(event);
    this.typeSubsidiaryService.GetListTypesByNatureId(event.natureId).subscribe(res=>{
      this.typeSubsidiaryService.lisTypes=res as []
    })

  }
  AddConditioning(){
    this.typeSubsidiaryService.hiddenButtunGroup=true


  }
  GetListSubTypesByFK_Type(event){
this.typeSubsidiaryService.GetListSubTypesByFK_Type(event.typeId).subscribe(res=>this.typeSubsidiaryService.ListSubTypesByTypeId=res as [])




  }
  SelectSubTypes (){
    this.typeSubsidiaryService.hiddenConditioningButtunGroup=true;
    this.TypeSubsidiaryFormArray.push(
    this.fb.group({
     type_SubsidiaryId: ['00000000-0000-0000-0000-000000000000'],
     fK_Subsidiary: ['00000000-0000-0000-0000-000000000000'],
     fK_Type: ['00000000-0000-0000-0000-000000000000'],
     miseEnDecharge: false,
     fK_Conditioning: ['00000000-0000-0000-0000-000000000000'],
     conditioningLabel:'',
     isActive:true
  
      }),
    )


  }
  onDelete(i, itemId){
 this.TypeSubsidiaryFormArray.removeAt(i);
 if(this.TypeSubsidiaryFormArray.length == 0 )
{this.typeSubsidiaryService.hiddenButtunGroup = false;
this.typeSubsidiaryService.hiddenConditioningButtunGroup = false}

if(    this.typeSubsidiaryService.forUpdate==true){
  console.log(itemId)
  //debugger
  
  //let SubTypeSubsidiary= this.TypeSubsidiaryFormArray.value;
 // Object.assign(SubTypeSubsidiary, this.TypeSubsidiaryFormArray.at(i).value)
  this.typeSubsidiaryService.DeleteType_Subsidiary(itemId) .subscribe(res=>{console.log(res);
    if(res =="Delete Done"){
      Swal.fire({
             position: 'top-end',
             text: 'la suppression  est effectuée avec succès',
             icon: 'warning',
             toast: true,
             timer: 3000,
             timerProgressBar: true,
             showConfirmButton: false
           });

           }
  
  })


}


  }
  onSubmit() {
    console.log(this.typeSubsidiaryService.forUpdate+""+this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal['controls'].goalValue.value)
  //  debugger
    if(this.typeSubsidiaryService.forUpdate){
      this.lisSubsidiary.push(this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Subsidiary.value) ;
  

    }
    else{
      this.lisSubsidiary= this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Subsidiary.value ;
  
      
    }
   //.push(...)
    // this.subsidiaryFunctionService.addSubsidiaryFunctionForm.controls.fkFonction.setValue("")
  //  debugger


    this.lisSubsidiary.forEach(x=>  {this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Subsidiary.setValue (x)
     
      // if(this.typeService.addOrEditType_SubsidiaryForm.controls.goal['controls'].goalValue.value == 0){
      //   (this.typeService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).removeControl('goalId');
      //   this.typeService.addOrEditType_SubsidiaryForm.controls.type['controls'].miseEnDecharge.setValue(false);
      //   (this.typeService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).removeControl('goalValue');
      //   (this.typeService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).removeControl('date');
      //   (this.typeService.addOrEditType_SubsidiaryForm.controls['goal'] as FormGroup).removeControl('isActive');
      //   (this.typeService.addOrEditType_SubsidiaryForm.controls['goal'] as FormGroup).removeControl('miseEnDecharge')
      
      // }
    
    
      // if(this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal['controls'].goalValue.value == 0){
      //   debugger





      // //  // this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal['controls'].miseEnDecharge.setValue(false);
      // //   (this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).removeControl('goalId');
      // //   (this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).removeControl('goalValue');
      // //   (this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).removeControl('date');
      // //   (this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls['goal'] as FormGroup).removeControl('isActive');
      // //  // (this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls['goal'] as FormGroup).removeControl('miseEnDecharge')
      
      // }
      if(! this.typeSubsidiaryService.forUpdate){
        
        if(this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal['controls'].goalValue.value == 0){


          var  type_Subsidiary=new Type_Subsidiary();
          type_Subsidiary.type_SubsidiaryId=this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.type_SubsidiaryId.value
          type_Subsidiary.fK_Subsidiary= this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Subsidiary.value
          type_Subsidiary.fK_Type=this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Type.value
          type_Subsidiary.fK_Conditioning= this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Conditioning.value
          type_Subsidiary.fK_Nature= this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Nature.value
          console.log(this.typeSubsidiaryService.selectedgoal)
      //    debugger
      //    debugger
          this.typeSubsidiaryService.PostType_Subsidiary (type_Subsidiary).subscribe(
            res => {
    
    
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
                     if(res == "Affectation déja faite"){
                       Swal.fire({
                         position: 'top-end',
                         text: 'Affectation déja faite',
                         icon: 'warning',
                         toast: true,
                         timer: 3000,
                         timerProgressBar: true,
                         showConfirmButton: false
                       });
    
                     }
              this.typeSubsidiaryService. GetAllType_Subsidiaries().subscribe(
                res => {
                  this.typeSubsidiaryService.ListAllType_Subsidiaries = res as [];
                 this.typeService.ListTypes=[]
    
    
                }
              )
            })

        }

        if(this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal['controls'].goalValue.value != 0){

 // debugger
  this.typeSubsidiaryService.PostType_Subsidiary (this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.value).subscribe(
          res => {
  
  
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
                   if(res == "Affectation déja faite"){
                     Swal.fire({
                       position: 'top-end',
                       text: 'Affectation déja faite',
                       icon: 'warning',
                       toast: true,
                       timer: 3000,
                       timerProgressBar: true,
                       showConfirmButton: false
                     });
  
                   }
            this.typeSubsidiaryService. GetAllType_Subsidiaries().subscribe(
              res => {
                this.typeSubsidiaryService.ListAllType_Subsidiaries = res as [];
               this.typeService.ListTypes=[]
  
  
              }
            )
          })

        }
      
       
      
      }
      if(this.typeSubsidiaryService.forUpdate){
        if(this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal['controls'].goalValue.value != 0){
          var  type_Subsidiary=new Type_Subsidiary();
      
          type_Subsidiary.type_SubsidiaryId=this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.type_SubsidiaryId.value
          type_Subsidiary.fK_Subsidiary= this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Subsidiary.value
          type_Subsidiary.fK_Type=this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Type.value
          type_Subsidiary.fK_Conditioning= this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Conditioning.value
          type_Subsidiary.fK_Nature= this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Nature.value
          console.log(this.typeSubsidiaryService.selectedgoal)
        //  debugger
          if(this.typeSubsidiaryService.selectedgoal != null){

            type_Subsidiary.fK_Goal= this.typeSubsidiaryService.selectedgoal .fK_Goal;
          }
          
        
        console.log(type_Subsidiary.type_SubsidiaryId)
      //  debugger
          this.typeSubsidiaryService.updateType_Subsidiary (type_Subsidiary).subscribe(
            res => {
              var  goal=new Goal();
      
              goal.goalId=this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal['controls'].goalId.value
              goal.goalValue= this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal['controls'].goalValue.value
              goal.addDate=this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal['controls'].addDate.value
              goal.isActif= true
              console.log(          type_Subsidiary.type_SubsidiaryId=this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.type_SubsidiaryId.value)
              console.log(this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal. value)
//debugger
              this.goalService.updateGoal (this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal. value ).subscribe(
        res=>console.log(res)
        
      )
    
              if(res =="Update Done"){
                this.typeSubsidiaryService. GetAllType_Subsidiaries().subscribe(
                  res => {
                    this.typeSubsidiaryService.ListAllType_Subsidiaries = res as [];
                   this.typeService.ListTypes=[]
      
      
                  }
                )
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
                     if(res == "Affectation déja faite"){
                       Swal.fire({
                         position: 'top-end',
                         text: 'Affectation déja faite',
                         icon: 'warning',
                         toast: true,
                         timer: 3000,
                         timerProgressBar: true,
                         showConfirmButton: false
                       });
    
                     }
              this.typeSubsidiaryService. GetAllType_Subsidiaries().subscribe(
                res => {
                  this.typeSubsidiaryService.ListAllType_Subsidiaries = res as [];
                 this.typeService.ListTypes=[]
    
    
                }
              )
            })
        }
       if(this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.goal['controls'].goalValue.value == 0){
        var  type_Subsidiary=new Type_Subsidiary();
      
        type_Subsidiary.type_SubsidiaryId=this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.type_SubsidiaryId.value
        type_Subsidiary.fK_Subsidiary= this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Subsidiary.value
        type_Subsidiary.fK_Type=this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Type.value
        type_Subsidiary.fK_Conditioning= this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Conditioning.value
        type_Subsidiary.fK_Nature= this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Nature.value
     
   this.typeSubsidiaryService.updateType_Subsidiary (type_Subsidiary).subscribe(
        res => {


          if(res =="Update Done"){
            Swal.fire({
                   position: 'top-end',
                   text: 'la modification est effectuée avec succès',
                   icon: 'success',
                   toast: true,
                   timer: 3000,
                   timerProgressBar: true,
                   showConfirmButton: false
                 });

                 }
                 if(res == "Affectation déja faite"){
                   Swal.fire({
                     position: 'top-end',
                     text: 'Affectation déja faite',
                     icon: 'warning',
                     toast: true,
                     timer: 3000,
                     timerProgressBar: true,
                     showConfirmButton: false
                   });

                 }
           this.typeSubsidiaryService. GetAllType_Subsidiaries().subscribe(
             res => {
               this.typeSubsidiaryService.ListAllType_Subsidiaries = res as [];
              this.typeService.ListTypes=[]


             }
           )
        })

       }
   
      
      }
    
    
    } )
  
    // this.lisTypes = this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Type.value;
    // this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Type.setValue("")
    // this.lisTypes.forEach(x => {
    //   this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.controls.fK_Type.setValue(x)

    
           if(this.TypeSubsidiaryFormArray.length > 0){
             this.TypeSubsidiaryFormArray.value.forEach(element => {
              this.lisSubsidiary.forEach(x=>  {element.fK_Subsidiary =x
     
                if(element.type_SubsidiaryId == "00000000-0000-0000-0000-000000000000"){
                  this.typeSubsidiaryService.PostType_Subsidiary (element).subscribe(res=>
                    console.log(res)
                  )
                
  
                  } else{
  
                    this.typeSubsidiaryService.updateType_Subsidiary(element).subscribe
                    (res=>{
                      this.typeSubsidiaryService. GetAllType_Subsidiaries().subscribe(
                        res => {
                          this.typeSubsidiaryService.ListAllType_Subsidiaries = res as [];
                       //   debugger
                      //    debugger
                         this.typeService.ListTypes=[]
            
            
                        }
                      )
                    })
                  }
              
              
              })

              

               } )
               
             }
             
            
           
             this.typeSubsidiaryService. GetAllType_Subsidiaries().subscribe(
              res => {
                this.typeSubsidiaryService.ListAllType_Subsidiaries = res as [];
             //   debugger
            //    debugger
               this.typeService.ListTypes=[]
  
  
              }
            )


   // })
  //   //this.typeSubsidiaryService.resetaddOrEditType_SubsidiaryForm()
  //   this.bsModalRef.hide();
  //   (this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).addControl('goalId', new FormControl());
  //   (this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).addControl('goalValue', new FormControl());
  //   (this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).addControl('date', new FormControl());
  //   (this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).addControl('isActive', new FormControl());
  //  // (this.typeSubsidiaryService.addOrEditType_SubsidiaryForm.get('goal') as FormGroup).addControl('miseEnDecharge', new FormControl());
    
this.bsModalRef.hide()
  }

}
