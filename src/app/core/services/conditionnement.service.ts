import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Conditionnement } from '../models/conditionnement.model';

@Injectable({
  providedIn: 'root'
})
export class ConditionnementService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  orderForm: FormGroup;
  ListConditionnement: Conditionnement[];

  formConditionnement = this.fb.group({
    conditioningId: ['00000000-0000-0000-0000-000000000000'],
    conditioningLabel: ['', [Validators.required]],
    isActive: true,
    fkConditioningType: ['00000000-0000-0000-0000-000000000000']
  });

  getListConditionnement() {
    return this.http.get(environment.apiURL + '/Conditioning/GetAllConditioning');
  }
  postConditionnement() {
    return this.http.post(environment.apiURL + '/Conditioning/PostConditioning', this.formConditionnement.value, { responseType: "text" });
  }
  updateConditionnement() {
    return this.http.put(environment.apiURL + '/Conditioning/PutConditioning', this.formConditionnement.value, { responseType: "text" });
  }

  deleteConditionnement(conditionement) {
    conditionement.isActive = false;
    return this.http.put(environment.apiURL + '/Conditioning/PutConditioning', conditionement, { responseType: "text" });
  }
  // deleteConditionnement(id){
  //   return this.http.delete(environment.apiURL + '/Conditioning/DeleteConditioning?id=' + id, { responseType: "text" });
  // }
  resetConditionnement() {
    this.formConditionnement.reset({
      conditioningId: '00000000-0000-0000-0000-000000000000',
      conditioningLabel: '',
      isActive: true,
      fkConditioningType: '00000000-0000-0000-0000-000000000000'
    });
  }
}
