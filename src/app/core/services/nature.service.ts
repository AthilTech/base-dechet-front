import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Nature } from '../models/nature.model';

@Injectable({
  providedIn: 'root'
})
export class NatureService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ListNature: Nature[];

  formNature = this.fb.group({
    natureId: ['00000000-0000-0000-0000-000000000000'],
    natureLabel: ['', [Validators.required]],
    isActive: true,
  });

  getListNature() {
    return this.http.get(environment.apiURL + '/Nature/GetAllNature');
  }
  postNature() {
    return this.http.post(environment.apiURL + '/Nature/PostNature', this.formNature.value, { responseType: "text" });
  }
  updateNature() {
    return this.http.put(environment.apiURL + '/Nature/PutNature', this.formNature.value, { responseType: "text" });
  }

  deleteNatureDechet(nature) {
    nature.isActive = false;
    return this.http.put(environment.apiURL + '/Nature/PutNature', nature, { responseType: "text" });
  }


  deleteNature(id) {
    return this.http.delete(environment.apiURL + '/Nature/DeleteNature?natureId=' + id, { responseType: "text" });
  }
  resetNatureForm() {
    this.formNature.reset({
      natureId: '00000000-0000-0000-0000-000000000000',
      natureLabel: '',
      isActive: true,
    });
  }
}
