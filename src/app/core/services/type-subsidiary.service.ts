import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Conditionnement } from '../models/conditionnement.model';
import { Type_Subsidiary } from '../models/type-subsidiary';
import { Type } from '../models/type.model';

@Injectable({
  providedIn: 'root'
})

export class TypeSubsidiaryService {

  ListAllType_Subsidiaries: any[] = new Array();
  forUpdate:boolean=false;
  lisTypes: Type[] = new Array();
  ListType_SubsidiariesByNatureIdAndSubsidiaryId: any[] = new Array();
  ListSubTypesByTypeId=[]
  ListSubTypesByFK_TypeForUpdate=[]
  hiddenButtunGroup : boolean=false;
  hiddenConditioningButtunGroup: boolean=false;
  selecteditem:any;
  selectedgoal:any;
  addItem:boolean=true
  constructor(public http: HttpClient, public fb: FormBuilder) { }
  addOrEditSubType_SubsidiaryForm = this.fb.group({
    Type_Subsidiary: this.fb.array([



    ]),
    
  })

  addOrEditType_SubsidiaryForm = this.fb.group({
   
     type_SubsidiaryId: ['00000000-0000-0000-0000-000000000000'],
     fK_Subsidiary: ['00000000-0000-0000-0000-000000000000'],
     fK_Type: ['00000000-0000-0000-0000-000000000000'],
     miseEnDecharge: false,
     fK_Conditioning: [null],
     fK_Nature:['00000000-0000-0000-0000-000000000000'],
     fK_Goal:['00000000-0000-0000-0000-000000000000'],
     isActive:true,
     
     
     goal: this.fb.group(
       {
        goalId: '00000000-0000-0000-0000-000000000000',
         goalValue: [0],
         addDate: [new Date().getFullYear()],
         isActive: true,
         
         
       }
     ),
   
 


    
    // type_SubsidiaryId: ['00000000-0000-0000-0000-000000000000'],
    // fK_Subsidiary: ['00000000-0000-0000-0000-000000000000'],
    // fK_Type: ['00000000-0000-0000-0000-000000000000'],
    // miseEnDecharge: false,
    // fK_Conditioning: ['', [Validators.required]],
    // goal: this.fb.group(
    //   {
    //     goalId: '00000000-0000-0000-0000-000000000000',
    //     goalValue: ['', [Validators.required]],
    //     date: ['', [Validators.required]],
    //     isActive: true,
    //   }
    // ),


  });

  

  GetAllType_Subsidiaries() {
    return this.http.get(environment.apiURL + '/Type_Subsidiary/GetAllType_Subsidiaries');
  }
  GetListTypesByNatureId(FK_Nature){
    return this.http.get(environment.apiURL + '/Type/GetListTypesByNatureId?FK_Nature='+FK_Nature);
  }
  GetListSubTypesByFK_Type(fK_Type){
    return this.http.get(environment.apiURL + '/Type/GetListSubTypesByFK_Type?fK_Type='+fK_Type);

    
  }

  PostType_Subsidiary(body) {
    return this.http.post(environment.apiURL + '/Type_Subsidiary/PostType_Subsidiary', body, { responseType: "text" });
  }

  updateType_Subsidiary(body) {
    return this.http.put(environment.apiURL + '/Type_Subsidiary/PutType_Subsidiary', body, { responseType: "text" });
  }

  DeleteType_Subsidiary(type_SubsidiaryId) {
    return this.http.delete(environment.apiURL + '/Type_Subsidiary/DeleteType_Subsidiary?type_SubsidiaryId=' + type_SubsidiaryId, { responseType: "text" });
  }

  resetaddOrEditType_SubsidiaryForm() {
    this.addOrEditType_SubsidiaryForm.reset({
      type_SubsidiaryId: '00000000-0000-0000-0000-000000000000',
      fK_Subsidiary: '00000000-0000-0000-0000-000000000000',
      fK_Type: '00000000-0000-0000-0000-000000000000',
      fK_Conditioning:null,
      miseEnDecharge: false,
      fK_Nature: '00000000-0000-0000-0000-000000000000',
      isActive:true
      
      
    });
    this.addOrEditType_SubsidiaryForm.controls.goal.reset({

      goalId: '00000000-0000-0000-0000-000000000000',
      goalValue: 0,
      addDate: new Date().getFullYear(),
      isActive: true,
    })
  }

  GetAllNatures() {
    return this.http.get(environment.apiURL + '/Nature/GetAllNature');
  }
  GetType_SubsidiariesBySubsidiaryIdAndNature(FK_Nature, FK_Subsidiary) {
    return this.http.get(environment.apiURL + "/Type_Subsidiary/GetType_SubsidiariesBySubsidiaryIdAndNature?FK_Nature=" + FK_Nature + '&FK_Subsidiary=' + FK_Subsidiary)
  }
  GetListSubTypesByFK_TypeForUpdate(FK_Type, FK_Subsidiary){
    return this.http.get(environment.apiURL + "/Type_Subsidiary/GetListSubTypesByFK_TypeForUpdate?FK_Type=" + FK_Type + '&FK_Subsidiary=' + FK_Subsidiary)
  

  }

}
