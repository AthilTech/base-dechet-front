import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { environment } from "src/environments/environment";
import { TypeFraisNature, TypeFraisNatureDTO } from "../models/type-frais-nature.model";


@Injectable({
  providedIn: 'root'
})
export class TypeFraisNatureService {
  ListTypeFraisNature: TypeFraisNature[] ;
  ListTypeFrais:TypeFraisNatureDTO[]
  constructor(private http: HttpClient, private fb: FormBuilder) { }
  
  TypeFraisNatureForm = this.fb.group({
    typeFraisNatureId: [''],
    fkTypeFrais: [''],
    fkNature: [''],
    isActive: [true]
  });

  GetAllTypeFraisNature() {
    return this.http.get(environment.apiURL + '/TypeFraisNature/GetAllTypeFraisNature');
  }

  postTypeFraisNature() {
   // debugger
    return this.http.post(environment.apiURL + '/TypeFraisNature/PostTypeFraisNature', this.TypeFraisNatureForm.value, { responseType: "text" });
  }

  updateTypeFraisNature() {
    return this.http.put(environment.apiURL + '/TypeFraisNature/PutTypeFraisNature', this.TypeFraisNatureForm.value, { responseType: "text" });
  }

  DeleteTypeFraisNature(typeFraisNature) {
    
    typeFraisNature.isActive = false;
    return this.http.put(environment.apiURL + '/TypeFraisNature/PutTypeFraisNature', typeFraisNature, { responseType: "text" });
  }
  getListTypeFraisByNature(id) {
   
    return this.http.get(environment.apiURL + '/TypeFraisNature/GetListTypeFraisByNature?FkNature='+ id);
  }
  
  resetTypeFraisNatureForm() {
    this.TypeFraisNatureForm.reset({
      typeFraisNatureId: '00000000-0000-0000-0000-000000000000',
      fkTypeFrais: '00000000-0000-0000-0000-000000000000',
      fkNature: '00000000-0000-0000-0000-000000000000',
      isActive: true
    });
  }

}
