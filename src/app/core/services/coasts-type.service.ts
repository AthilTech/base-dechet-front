import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CoastsType } from '../models/coasts-type';

@Injectable({
  providedIn: 'root'
})
export class CoastsTypeService {

   ListCoastsTypes:CoastsType[]= new Array();
 
   constructor(private http: HttpClient, private fb: FormBuilder) { }
    CoastsTypeForm = this.fb.group({
      coastsTypeId: ['00000000-0000-0000-0000-000000000000'],
      coastsTypeLabel: ['', [Validators.required]],
      isActive:true,
 });

   GetAllCoastsTypes(){
    
     return this.http.get(environment.apiURL + '/CoastsType/GetAllCoastsType');
   }

  postCoastsType() {
    return this.http.post(environment.apiURL + '/CoastsType/PostCoastsType', this.CoastsTypeForm.value, { responseType: "text" });
  }

  updateCoastsType() {
    return this.http.put(environment.apiURL + '/CoastsType/PutCoastsType', this.CoastsTypeForm.value, { responseType: "text" });
  }
  DeleteCoastsType(coasts) {
    coasts.isActive = false;
    return this.http.put(environment.apiURL + '/CoastsType/PutCoastsType', coasts, { responseType: "text" });
  }
  // DeleteCoastsType(criterionid) {
  //   return this.http.delete(environment.apiURL + '/CoastsType/DeleteCoastsType?coastsTypeId='+criterionid, { responseType: "text" });
  // }

  resetCoastsTypeForm() {
    this.CoastsTypeForm.reset({
      coastsTypeId: '00000000-0000-0000-0000-000000000000',
      coastsTypeLabel: '',
      isActive:'',
    });
  }

}
