import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ManagemantMode_Nature } from '../models/ManagementMode_Nature';
import { ModeGestion } from '../models/mode-gestion.model';

@Injectable({
  providedIn: 'root'
})
export class ModeGestionService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  get managemantMode_NatureFormArray(): FormArray {
    return this.formModeGestion.controls.managemantMode_Nature as FormArray
  }
  ListModeGestion: ModeGestion[];
  
  // formModeGestion = this.fb.group({
  //   //fk_NatureId:this.nature.natureId,
  //   managemantMode_Nature: this.fb.array([]),
  //   // managementModeId: ['00000000-0000-0000-0000-000000000000'],
  //   // managementModeLabel: ['', [Validators.required]],
  //   // isActive: true,
  //    fk_NatureId: ['00000000-0000-0000-0000-000000000000'],
  // });
  formModeGestion = this.fb.group({
    //fk_NatureId:this.nature.natureId,
    managemantMode_Nature: this.fb.array([]),
     //managementModeId: ['00000000-0000-0000-0000-000000000000'],
     //managementModeLabel: ['', [Validators.required]],
    //isActive: true,
     //fk_NatureId: ['00000000-0000-0000-0000-000000000000'],
  });

  getListModeGestion() {
    return this.http.get(environment.apiURL + '/ManagementMode/GetManagementModes');
  }
  postModeGestion(value) {
    return this.http.post(environment.apiURL + '/ManagementMode/PostManagementMode', value, { responseType: "text" });
  }
  postModeGestionNature(managemantMode_NatureFormArrayValue) {

    return this.http.post(environment.apiURL + '/ManagementMode/PostManagementModeNature', managemantMode_NatureFormArrayValue, { responseType: "text" });
  }
  putModeGestionNature(managemantMode_NatureFormArrayValue) {
    return this.http.post(environment.apiURL + '/ManagementMode/PutManagementModeNature', managemantMode_NatureFormArrayValue, { responseType: "text" });
  }
  updateModeGestion() {
    return this.http.put(environment.apiURL + '/ManagementMode/PutManagementMode', this.formModeGestion.value, { responseType: "text" });
  }

  deleteModeGestion(managementMode) {
    managementMode.isActive = false;
    return this.http.put(environment.apiURL + '/ManagementMode/PutManagementMode', managementMode, { responseType: "text" });
  }
  deleteModeGestion_Nature(ManagementMode_Nature) {
    ManagementMode_Nature.isActive = false;
    return this.http.put(environment.apiURL + '/ManagementMode/PutManagementMode', ManagementMode_Nature, { responseType: "text" });
  }

  deleteManagementModeNature(MmanagementMode_Nature) {
    MmanagementMode_Nature.isActive = false;
    return this.http.put(environment.apiURL + '/ManagementMode/PutManagementMode_Nature', MmanagementMode_Nature, { responseType: "text" });
  }
  // deleteModeGestion(id){
  //   return this.http.delete(environment.apiURL + '/ManagementMode/DeleteManagementMode?managementModeId=' + id, { responseType: "text" });
  // }
  resetModeGestionForm() {
    this.formModeGestion.reset({
      managementModeId: '00000000-0000-0000-0000-000000000000',
      managementModeLabel: '',
      isActive: true,
    });
  }

  

  // initializeModeGestion() {
  //   if (this.scenario.scenarioId != undefined) {
  //     this.scenarioForm.reset({
  //       scenarioId: this.scenario.scenarioId,
  //       isCentralized: this.scenario.isCentralized,
  //       isActive: this.scenario.isActive,
  //       scenarioLabel: this.scenario.scenarioLabel
  //     })
  //     this.activityService.getActivitesByScenario(this.scenario.scenarioId).subscribe(
  //       res => {
  //         this.scenarioActivities = res as Activity[]
  //         this.scenarioActivities.forEach(activity => {

  //           this.addExistActivityToFormArray(activity);
  //         });
  //       }
  //     )

  //   }
  // }

}








