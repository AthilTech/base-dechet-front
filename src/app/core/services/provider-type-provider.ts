import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ProviderType } from '../models/provider-Type';

@Injectable({
  providedIn: 'root'
})
export class ProviderTypeProviderService {
  ListAllProviderTypeProviders: any[] = new Array();

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  addOrEditProviderTypeProviderForm = this.fb.group({
    provider_ProviderTypeId: ['00000000-0000-0000-0000-000000000000'],
    fK_ProviderType: ['00000000-0000-0000-0000-000000000000'],
    fK_Provider: ['00000000-0000-0000-0000-000000000000'],
    isActive: [true]
  });

  GetAllProvider_ProviderTypesByProvierTypeId(ProviderTypeId) {
    return this.http.get(environment.apiURL + '/Provider_ProviderType/GetAllProvider_ProviderTypesByProvierTypeId?ProviderTypeId=' + ProviderTypeId);

  }

  GetAllProvider_ProviderTypes() {
    return this.http.get(environment.apiURL + '/Provider_ProviderType/GetAllProvider_ProviderTypes');
  }

  PostProvider_ProviderTypes() {
    return this.http.post(environment.apiURL + '/Provider_ProviderType/PostProvider_ProviderTypes', this.addOrEditProviderTypeProviderForm.value, { responseType: "text" });
  }

  updateProvider_ProviderType() {
    return this.http.put(environment.apiURL + '/Provider_ProviderType/PutProvider_ProviderType', this.addOrEditProviderTypeProviderForm.value, { responseType: "text" });
  }

  DeleteProvider_ProviderType(Provider_ProviderType) {
    Provider_ProviderType.isActive = false;
    return this.http.put(environment.apiURL + '/Provider_ProviderType/PutProvider_ProviderType', Provider_ProviderType, { responseType: "text" });
  }

  // DeleteProvider_ProviderType(Provider_ProviderTypeId) {
  //   return this.http.delete(environment.apiURL + '/Provider_ProviderType/DeleteProvider_ProviderType?Provider_ProviderTypeId='+Provider_ProviderTypeId, { responseType: "text" });
  // }

  resetaddOrEditProviderTypeProviderForm() {
    this.addOrEditProviderTypeProviderForm.reset({
      provider_ProviderTypeId: '00000000-0000-0000-0000-000000000000',
      fK_ProviderType: '00000000-0000-0000-0000-000000000000',
      fK_Provider: '00000000-0000-0000-0000-000000000000',
      isActive: true
    });
  }

}
