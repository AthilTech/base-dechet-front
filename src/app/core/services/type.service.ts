import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Type } from '../models/type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  ListAllTypes: any[] = new Array();
  ListTypes: any[] = new Array();
  listSousTypeGroupedByType: any[] = new Array();
  listSousTypeGroupedByNature: any[] = new Array();
  ListSubsidaryTypes: any[] = new Array();
  ListConditionnement: [];
  ListAssociatedConditioningTypes: [];
  selectedType: any
  openModalForUpdate: boolean = false;
  addSubType: boolean = false;
  showInput: boolean = false;
  fk_type: string
  constructor(public fb: FormBuilder, public http: HttpClient) { }


  ListType: Type[];
  setSubTypeForUpdate: boolean = false;
  setSubTypeForPost: boolean = false;
  addOrEditType_SubsidiaryForm = this.fb.group({
   // type_SubsidiaryId: ['00000000-0000-0000-0000-000000000000'],
   // fK_Subsidiary: ['00000000-0000-0000-0000-000000000000'],
    //fK_Goal: '00000000-0000-0000-0000-000000000000',

    type: this.fb.group(
      {
        typeId: '00000000-0000-0000-0000-000000000000',
        typeLabel: ['', [Validators.required]],
        fK_Type: ['', [Validators.required]],
        fK_Nature: ['', [Validators.required]],
       // fK_Conditioning: ['', [Validators.required]],
       // fK_ManagementMode: ['', [Validators.required]],
      //  miseEnDecharge: false
      }
    ),

    // goal: this.fb.group(
    //   {
    //     goalId: '00000000-0000-0000-0000-000000000000',
    //     goalValue: ['', [Validators.required]],
    //     date: ['', [Validators.required]],
    //     isActive: true,
    //   }
    // ),
  });


  // formType = this.fb.group({

  //   type_SubsidiaryId: ['00000000-0000-0000-0000-000000000000'],
  //   fK_Subsidiary: '00000000-0000-0000-0000-000000000000',


  //   type: this.fb.group(
  //     {
  //       typeId: '00000000-0000-0000-0000-000000000000',
  //       typeLabel: ['', [Validators.required]],
  //       fK_Type: ['', [Validators.required]],
  //       fK_Nature: ['', [Validators.required]],
  //       //fK_Conditioning: ['', [Validators.required]],
  //    //   fK_ManagementMode: ['', [Validators.required]],
  //     //  miseEnDecharge: true
  //     }
  //   ),

  //   goal: this.fb.group(
  //     {
  //       goalId: '00000000-0000-0000-0000-000000000000',
  //       goalValue: ['', [Validators.required]],
  //       date: ['', [Validators.required]],
  //       isActive: true,
  //     }
  //   ),
  //   //listSousType:[null],


  // });

  resetTypeForm() {
    //   debugger
    // this.addOrEditType_SubsidiaryForm.reset({
    //   type_SubsidiaryId: '00000000-0000-0000-0000-000000000000',
    //   fK_Subsidiary: '00000000-0000-0000-0000-000000000000',

    // });
    this.addOrEditType_SubsidiaryForm.controls.type.reset({
      typeId: '00000000-0000-0000-0000-000000000000',
      fK_Type: '',
      fK_Nature: '00000000-0000-0000-0000-000000000000',
    //  fK_Conditioning: '00000000-0000-0000-0000-000000000000',
     // fK_ManagementMode: '00000000-0000-0000-0000-000000000000',

    });
    // this.addOrEditType_SubsidiaryForm.controls.goal.reset({
    //   goalId: '00000000-0000-0000-0000-000000000000',
    //   goalValue: 0,
    //   isActive: true,

    // });

  }



  getListType() {
    return this.http.get(environment.apiURL + '/Type/GetAllType');
  }

  postType(type) {
    return this.http.post(environment.apiURL + '/Type/PostType', type, { responseType: "text" });
  }

  updateType(type) {
    return this.http.put(environment.apiURL + '/Type/PutType', type, { responseType: "text" });
  }

  deleteType(id) {
    return this.http.delete(environment.apiURL + '/Type/DeleteType?typeId=' + id, { responseType: "text" });
  }

  DeleteTypeWithSousTypes(typeId, goalId) {
    return this.http.delete(environment.apiURL + '/Type/DeleteTypewithSousType?typeId=' + typeId + '&goalId=' + goalId, { responseType: "text" });
  }

  GetAllSousTypeGroupedByTypes() {
    return this.http.get(environment.apiURL + '/Type/GetAllSousTypeGroupedByTypes')
  }

  GetAllTypes() {
    return this.http.get(environment.apiURL + '/Type/GetAllTypes');
  }

  GetTypes(FK_Nature) {
    return this.http.get(environment.apiURL + '/Type/GetTypes?FK_Nature=' + FK_Nature);
  }

  getDistinctListConditionnement() {
    return this.http.get(environment.apiURL + '/Conditioning/GetDistinctAllConditioning');
  }

  GetAssociatedConditioningTypes(ConditioningLabel) {
    return this.http.get(environment.apiURL + '/Conditioning/GetAssociatedConditioningTypes?ConditioningLabel=' + ConditioningLabel);
  }


  GetSubTypes(FK_Type){
    return this.http.get(environment.apiURL + '/Type/GetSubTypes?FK_Type=' + FK_Type);
  

  }

  GetTypesByNature(nature) {
    return this.http.get(environment.apiURL + '/Type/GetTypesByNature?nature='+ nature)
  }

  GetListSubsidaryByType() {
    return this.http.get(environment.apiURL + '/Type/GetListSubsidaryByType');
  }
}