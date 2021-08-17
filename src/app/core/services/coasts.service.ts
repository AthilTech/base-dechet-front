import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Coasts, CoastsDTO } from '../models/coasts';

@Injectable({
  providedIn: 'root'
})
export class CoastsService {

  ListAllCoasts: Coasts[] ;
  ListAllCoastsDTO: CoastsDTO[] 
  constructor(private http: HttpClient, private fb: FormBuilder) { }
  addOrEditCoastsForm = this.fb.group({
    coastsId: ['00000000-0000-0000-0000-000000000000'],
    amount: ['', [Validators.required]],
    fkTypeFraisNature: ['00000000-0000-0000-0000-000000000000'],
    isActive: [true]
  });

  GetAllCoasts() {
    return this.http.get(environment.apiURL + '/Coasts/GetAllCoasts');
  }

  postCoasts() {
    return this.http.post(environment.apiURL + '/Coasts/PostCoasts', this.addOrEditCoastsForm.value, { responseType: "text" });
  }

  updateCoasts() {
    return this.http.put(environment.apiURL + '/Coasts/PutCoasts', this.addOrEditCoastsForm.value, { responseType: "text" });
  }

  DeleteCoasts(coasts) {
    coasts.isActive = false;
    return this.http.put(environment.apiURL + '/Coasts/PutCoasts', coasts, { responseType: "text" });
  }


 
  
  resetaddOrEditCoastsForm() {
    this.addOrEditCoastsForm.reset({
      coastsId: '00000000-0000-0000-0000-000000000000',
      amount: '',
      fkTypeFraisNature: '00000000-0000-0000-0000-000000000000',
      isActive: true
    });
  }


}
