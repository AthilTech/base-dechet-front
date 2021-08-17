import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // ListOfAllCriterion:Criterion[]= new Array();
 
  // constructor(private http: HttpClient, private fb: FormBuilder) { }
  // addOrEditCriterionForm = this.fb.group({
  //   critereId: ['00000000-0000-0000-0000-000000000000'],
  //   critereLabel: ['', [Validators.required]],
  //   fkFonction: ['00000000-0000-0000-0000-000000000000'],
  //   fkPonderation: ['00000000-0000-0000-0000-000000000000'],
  // });

  // GetAllCriterion(){
  //   return this.http.get(environment.apiMSQualite + '/Critere/GetAllCriterion');
  // }

  // postCriterion() {
  //   return this.http.post(environment.apiMSQualite + '/Critere/PostCriterion', this.addOrEditCriterionForm.value, { responseType: "text" });
  // }

  // updateCriterion() {
  //   return this.http.put(environment.apiMSQualite + '/Critere/PutCriterion', this.addOrEditCriterionForm.value, { responseType: "text" });
  // }

  // DeleteCriterion(criterionid) {
  //   return this.http.delete(environment.apiMSQualite + '/Critere/DeleteCriterion?critereId='+criterionid, { responseType: "text" });
  // }

  // resetaddOrEditCriterionForm() {
  //   this.addOrEditCriterionForm.reset({
  //     critereId: '00000000-0000-0000-0000-000000000000',
  //     critereLabel: '',
  //     fkFonction: '00000000-0000-0000-0000-000000000000',
  //     fkPonderation: '00000000-0000-0000-0000-000000000000',
  //   });
  // }
 
}
