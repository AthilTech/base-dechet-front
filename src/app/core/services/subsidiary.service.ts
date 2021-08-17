import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Subsidiary } from '../models/subsidiary';

@Injectable({
  providedIn: 'root'
})
export class SubsidiaryService {

  ListAllSubsidiaries: Subsidiary[] = new Array();
  ListActiveSubsidiaries: Subsidiary[] = new Array();
  FilialeList: Subsidiary[] = new Array();
  constructor(private http: HttpClient, private fb: FormBuilder) { }
  addOrEditSubsidiaryForm = this.fb.group({
    subsidiaryId: ['00000000-0000-0000-0000-000000000000'],
    subsidiaryCode: ['', [Validators.required]],
    label: ['', [Validators.required]],
    domainCode: ['', [Validators.required]],
    entityCode: ['', [Validators.required]],
    isActive: ['', [Validators.required]],
    sectorLabel: ['', [Validators.required]],
    fkSector: ['00000000-0000-0000-0000-000000000000'],
  });

  GetLocalAllSubsidiaries() {
    return this.http.get(environment.apiURL + '/Subsidiary/GetLocalAllSubsidiaries');
  }

  GetActiveSubsidiaries() {
    return this.http.get(environment.apiURL + '/Subsidiary/GetActiveSubsidiaries');

  }
  GetAllSubsidiaries() {
    return this.http.get(environment.SubsidiaryURL);
  }

  postSubsidiary(subsidiary: any) {

    return this.http.post(environment.apiURL + '/Subsidiary/PostSubsidiary', subsidiary, { responseType: "text" });
  }

  postOrPutSubsidiary(subsidiary) {
    return this.http.post(environment.apiURL + '/Subsidiary/PostOrPutSubsidiary', subsidiary, { responseType: "text" });
  }

  updateSubsidiary() {
    return this.http.put(environment.apiURL + '/Subsidiary/PutSubsidiary', this.addOrEditSubsidiaryForm.value, { responseType: "text" });
  }

  DeleteSubsidiary(subsidiaryId) {
    return this.http.delete(environment.apiURL + '/Subsidiary/DeleteSubsidiary?critereId=' + subsidiaryId, { responseType: "text" });
  }

  GetLocalAllSectors(){
    return this.http.get(environment.apiURL + '/Subsidiary/GetLocalAllSectors');


  }
  GetListSubsidiariesBySectorLabel(sectorLabel){
    return this.http.get(environment.apiURL + '/Subsidiary/GetListSubsidiariesBySectorLabel?SectorLabel='+sectorLabel);


  }

  resetaddOrEditSubsidiaryForm() {
    this.addOrEditSubsidiaryForm.reset({
      subsidiaryId: '00000000-0000-0000-0000-000000000000',
      subsidiaryCode: '',
      label: '',
      domainCode: '',
      entityCode: '',
      isActive: '',
      sectorLabel: '',
      fkSector: '00000000-0000-0000-0000-000000000000',
    });
  }

}
