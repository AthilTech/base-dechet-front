import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CoastsType } from '../models/coasts-type';
import { Conditionnement } from '../models/conditionnement.model';

@Injectable({
  providedIn: 'root'
})
export class TrackingSheetService {


    //trackingSheetForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) { }

        // // List
        // AddTrakingSheet() {
        //     this.trackingSheetFormArray.enable();
        //     const consttrackingSheetArray = this.trackingSheetFormArray as FormArray;
        //     consttrackingSheetArray.push(this.fb.group({
        //       dechetId: ['00000000-0000-0000-0000-000000000000'],
        //       referenceBordereau1:[''],
        //       referenceBordereau2:[''],
        //       DateEnlevement1 :[''],
        //       DateEnlevement2 :[''],
        //       Tonnage:[],
        //       NbVoyage:[],
        //       fK_Visite: ['00000000-0000-0000-0000-000000000000'],
        //       fK_RankingId: ['00000000-0000-0000-0000-000000000000'],
        //      // fK_CoastsId: ['00000000-0000-0000-0000-000000000000'],
        //       fK_Type_Subsidiary_ProviderId: ['00000000-0000-0000-0000-000000000000'],
           
        //     }))
        //   }
        
        //   get trackingSheetFormArray() {
        //     return this.trackingSheetForm.get('trackingSheetFormArray') as FormArray;
        //   }

        DeleteDechet(dechet) {
          dechet.isActive = false;
          return this.http.put(environment.apiURL + '/Dechet/PutDechet', dechet, { responseType: "text" });
        }

        GetDechetsByProviderId(FK_Provider) {
          return this.http.get(environment.apiURL + '/Dechet/GetDechetsByProviderId?FK_Provider='+FK_Provider);
        }

        

}

