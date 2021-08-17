import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ProviderType } from '../models/provider-Type';

@Injectable({
  providedIn: 'root'
})
export class ProviderTypeService {

  ListAllProviderTypes: ProviderType[] = new Array();

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  addOrEditProviderTypeForm = this.fb.group({
    providerTypeId: ['00000000-0000-0000-0000-000000000000'],
    providerTypeLabel: ['', [Validators.required]],
    isActive: [true]
  });

  GetAllProviderTypes() {
    return this.http.get(environment.apiURL + '/ProviderType/GetAllProviderTypes');
  }

  postProviderType() {
    return this.http.post(environment.apiURL + '/ProviderType/PostProviderType', this.addOrEditProviderTypeForm.value, { responseType: "text" });
  }

  updateProviderType() {
    return this.http.put(environment.apiURL + '/ProviderType/PutProviderType', this.addOrEditProviderTypeForm.value, { responseType: "text" });
  }

  DeleteProviderType(providerType) {
    providerType.isActive = false;
    return this.http.put(environment.apiURL + '/ProviderType/PutProviderType', providerType, { responseType: "text" });
  }

  // DeleteProviderType(providerTypeId) {
  //   return this.http.delete(environment.apiURL + '/ProviderType/DeleteProviderType?providerTypeId='+providerTypeId, { responseType: "text" });
  // }

  resetaddOrEditProviderTypeForm() {
    this.addOrEditProviderTypeForm.reset({
      providerTypeId: '00000000-0000-0000-0000-000000000000',
      providerTypeLabel: '',
      isActive: true
    });
  }

}
