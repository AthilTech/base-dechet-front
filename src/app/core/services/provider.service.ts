import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Provider } from '../models/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  ListAllProviders: any[] = new Array();

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  addOrEditProviderForm = this.fb.group({
    providerId: ['00000000-0000-0000-0000-000000000000'],
    providerName: ['', [Validators.required]],
    filePath: [''],
    fileName: [''],
    providerTel: ['', [Validators.required]],
    address: [''],
    isApproved: false,
    isActive: [true]
    // fK_ProviderType: ['00000000-0000-0000-0000-000000000000'],
  });

  GetAllProviders() {
    return this.http.get(environment.apiURL + '/Provider/GetAllProviders');
  }

  postProvider() {
    return this.http.post(environment.apiURL + '/Provider/PostProvider', this.addOrEditProviderForm.value, { responseType: "text" });
  }

  updateProvider() {
    return this.http.put(environment.apiURL + '/Provider/PutProvider', this.addOrEditProviderForm.value, { responseType: "text" });
  }

  DeleteProvider(provider) {
    provider.isActive = false;
    return this.http.put(environment.apiURL + '/Provider/PutProvider', provider, { responseType: "text" });
  }

  // DeleteProvider(providerId) {
  //   return this.http.delete(environment.apiURL + '/Provider/DeleteProvider?providerId='+providerId, { responseType: "text" });
  // }

  resetaddOrEditProviderForm() {
    this.addOrEditProviderForm.reset({
      providerId: '00000000-0000-0000-0000-000000000000',
      providerName: '',
      filePath: '',
      fileName: '',
      providerTel: '',
      Address: '',
      isApproved: false,
      isActive: true
      //fK_ProviderType: '00000000-0000-0000-0000-000000000000',
    });
  }

}
