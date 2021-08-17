import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ConditionementType } from '../models/conditionement-type';

@Injectable({
  providedIn: 'root'
})
export class ConditionementTypeService {
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ListConditionementType: ConditionementType[];
  //orderForm: FormGroup;
  // formConditionementType=this.fb.group({
  //   conditioningTypeId:['00000000-0000-0000-0000-000000000000'],
  //   value:['', [Validators.required]],
  //   isActive:true,

  // });

  getListConditionementType() {
    return this.http.get(environment.apiURL + '/ConditioningType/GetAllConditioningType');
  }
  postConditionementType(ConditionementType: ConditionementType) {
    return this.http.post(environment.apiURL + '/ConditioningType/PostConditioningType', ConditionementType);
  }
  updateConditionementType() {
    return this.http.put(environment.apiURL + '/ConditioningType/PutConditioningType', { responseType: "text" });
  }
  deleteConditionementType(id) {
    return this.http.delete(environment.apiURL + '/ConditioningType/DeleteConditioningType?id=' + id, { responseType: "text" });
  }
  // resetConditionementType(){
  //   this.formConditionementType.reset({ 
  //     conditioingTypeId:'00000000-0000-0000-0000-000000000000',
  //     conditioningLabel:'',
  //     isActive:true,
  //     fkConditioningType:''
  //   });
  // }
}