import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Type_Subsidiary_Provider } from '../models/type-subsidiary-provider';

@Injectable({
  providedIn: 'root'
})
export class TypeSubsidiaryProviderService {

  ListAllTypeSubsidiaryProviders: Type_Subsidiary_Provider[] = new Array();

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  addOrEditType_Subsidiary_ProviderForm = this.fb.group({
    type_Subsidiary_ProviderId: ['00000000-0000-0000-0000-000000000000'],
    fK_Type_Subsidiary: ['00000000-0000-0000-0000-000000000000'],
    fK_Provider_ProviderType: ['00000000-0000-0000-0000-000000000000'],
    isActive: [true], 
    fK_Subsidiary: ['00000000-0000-0000-0000-000000000000'], 
    natureId: [null]
  });

  GetAllTypeSubsidiaryProvider() {
    return this.http.get(environment.apiURL + '/Type_Subsidiary_Provider/GetAllType_Subsidiary_Providers');
  }

  postTypeSubsidiaryProvider() {
    return this.http.post(environment.apiURL + '/Type_Subsidiary_Provider/PostType_Subsidiary_Provider', this.addOrEditType_Subsidiary_ProviderForm.value, { responseType: "text" });
  }

  updateTypeSubsidiaryProvider() {
    return this.http.put(environment.apiURL + '/Type_Subsidiary_Provider/PutType_Subsidiary_Provider', this.addOrEditType_Subsidiary_ProviderForm.value, { responseType: "text" });
  }

  DeleteTypeSubsidiaryProvider(type_Subsidiary_Provider) {
    type_Subsidiary_Provider.isActive = false;
    return this.http.put(environment.apiURL + '/Type_Subsidiary_Provider/PutType_Subsidiary_Provider', type_Subsidiary_Provider, { responseType: "text" });
  }

  // DeleteTypeSubsidiaryProvider(type_Subsidiary_ProviderId) {
  //   return this.http.delete(environment.apiURL + '/Type_Subsidiary_Provider/DeleteType_Subsidiary_Provider?type_Subsidiary_ProviderId='+type_Subsidiary_ProviderId, { responseType: "text" });
  // }

  resetaddOrEditTypeSubsidiaryProviderForm() {
    this.addOrEditType_Subsidiary_ProviderForm.reset({
      type_Subsidiary_ProviderId: '00000000-0000-0000-0000-000000000000',
      fK_Type_Subsidiary: '00000000-0000-0000-0000-000000000000',
      fK_Provider_ProviderType: '00000000-0000-0000-0000-000000000000',
      isActive: true, 
      fK_Subsidiary: '00000000-0000-0000-0000-000000000000', 
      natureId: null

    });
  }


}
