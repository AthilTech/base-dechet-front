import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Dechet } from 'src/app/core/models/dechet.model';
import { ModeGestion } from 'src/app/core/models/mode-gestion.model';
import { Nature } from 'src/app/core/models/nature.model';
import { Subsidiary } from 'src/app/core/models/subsidiary';
import { Type } from 'src/app/core/models/type';
import { ModeGestionService } from 'src/app/core/services/mode-gestion.service';
import { NatureService } from 'src/app/core/services/nature.service';
import { SubsidiaryService } from 'src/app/core/services/subsidiary.service';
import { TrackingSheetService } from 'src/app/core/services/trackingSheet.service';
import { TypeSubsidiaryService } from 'src/app/core/services/type-subsidiary.service';
import { TypeService } from 'src/app/core/services/type.service';

@Component({
  selector: 'app-add-tracking-sheet',
  templateUrl: './add-tracking-sheet.component.html',
  styles: [
  ]
})
export class AddTrackingSheetComponent implements OnInit {
  ListDistinctSectors : Array<string>= new Array();
  ListSubsidiariesBySectorLabel : Array<Subsidiary>= new Array();
  listNatures : Array<Nature>= new Array();
  listSubTypes : Array<Type>= new Array();
  ListModeGestion : Array<ModeGestion>= new Array();
  ListDechets : Array<Dechet>= new Array();
  selectSubsidiary: Subsidiary;
  //trackingSheetForm: FormGroup;
  dechetForm = this.fb.group({
    trackingSheetFormArray: this.fb.array([])
  })
    constructor(public subsidiaryService: SubsidiaryService , public natureService : NatureService, 
      public typeSubsidiaryService : TypeSubsidiaryService , public typeService : TypeService,
      public modeGestionServiceService : ModeGestionService, public fb : FormBuilder , public trackingSheetService  : TrackingSheetService) { 
  
      }



      ngOnInit(): void {
        this.initializeListDechet();
        this.subsidiaryService.GetLocalAllSectors().subscribe(res=> this.ListDistinctSectors=res as string[]);
        this.natureService.getListNature().subscribe(res=>this.listNatures=res as Nature[]);
        this.modeGestionServiceService.getListModeGestion().subscribe(
          res=>{
           this.ListModeGestion =  res as ModeGestion[]
          }
        ); 
      }
      changedate(value){
    console.log(value)
    debugger
    
      }
    
      changepole(value){
        console.log(value)
        this.subsidiaryService.GetListSubsidiariesBySectorLabel(value).subscribe(res=>this.ListSubsidiariesBySectorLabel = res as Subsidiary[])
        debugger
        
          }
          changesubsidiary(value){
          this.selectSubsidiary=value;
    
          }
          changenature(value){
    
            this.typeSubsidiaryService.GetType_SubsidiariesBySubsidiaryIdAndNature(value.natureId , this.selectSubsidiary.subsidiaryId  ).subscribe(
              res=>{
               this.typeSubsidiaryService.ListType_SubsidiariesByNatureIdAndSubsidiaryId =  res as []
              })
          }
    
          changetype(value){
         this.typeService.GetSubTypes(value.fK_Type).subscribe(res=>this.listSubTypes=res as [])
    
          }
          changemodegestion(value){
            console.log(value);
            debugger
    
    
          }
    
    
    
          
          get trackingSheetFormArray(): FormArray {
            return this.dechetForm.controls.trackingSheetFormArray as FormArray
          }
    
    
        //   get trackingSheetFormArray() {
        //   return this.trackingSheetService.trackingSheetForm.get('trackingSheetFormArray') as FormArray;
        // }
    
    
          //
    
          initializeListDechet() {
           var FK_Provider;
              this.trackingSheetService.GetDechetsByProviderId(FK_Provider).subscribe(
                res => {
                  this.ListDechets = res as Dechet[]
                  this.ListDechets.forEach(dechet => {
        
                    this.addExisttrackingSheetFormArray(dechet);
                  });
                }
              )
        
            
          }
    
    
      addNewtrackingSheetFormArray() {
        this.trackingSheetFormArray.push(
          this.fb.group({ 

            //


             label:[this.ListSubsidiariesBySectorLabel.find(x=>x.subsidiaryId== this.selectSubsidiary.subsidiaryId).label],
            //
            dechetId: ['00000000-0000-0000-0000-000000000000'],
            referenceBordereau1:[''],
            referenceBordereau2:[''],
            DateEnlevement1 :[''],
            DateEnlevement2 :[''],
            Tonnage:[],
            NbVoyage:[],
            fK_Visite: ['00000000-0000-0000-0000-000000000000'],
            fK_RankingId: ['00000000-0000-0000-0000-000000000000'],
           // fK_CoastsId: ['00000000-0000-0000-0000-000000000000'],
            fK_Type_Subsidiary_ProviderId: ['00000000-0000-0000-0000-000000000000'],
            })
        )
      }
    
      addExisttrackingSheetFormArray(dechet) {
        this.trackingSheetFormArray.push(
          this.fb.group({
            dechetId: dechet.dechetId,
            referenceBordereau1:dechet.referenceBordereau1,
            referenceBordereau2:dechet.referenceBordereau2,
            DateEnlevement1 :dechet.DateEnlevement1,
            DateEnlevement2 :dechet.DateEnlevement2,
            Tonnage:dechet.Tonnage,
            NbVoyage:dechet.NbVoyage,
            fK_Visite: dechet.fK_Visite,
            fK_RankingId: dechet.fK_RankingId,
           // fK_CoastsId: ['00000000-0000-0000-0000-000000000000'],
            fK_Type_Subsidiary_ProviderId:dechet.fK_Type_Subsidiary_ProviderId,
             })
        )
      }
    
      removeDechet() {
        let dechet: Dechet = new Dechet();
    
        Object.assign(dechet, this.trackingSheetFormArray.at(this.trackingSheetFormArray.length - 1).value)
    
    
        if (dechet.dechetId == '00000000-0000-0000-0000-000000000000') {
    
          this.trackingSheetFormArray.removeAt(this.trackingSheetFormArray.length - 1)
        }
        else {
    
          this.trackingSheetService.DeleteDechet(dechet).subscribe(
            res => {
              this.trackingSheetFormArray.removeAt(this.trackingSheetFormArray.length - 1)
            }
          )
        }
      }

  

}
