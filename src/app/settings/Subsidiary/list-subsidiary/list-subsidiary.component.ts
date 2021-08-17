import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subsidiary } from 'src/app/core/models/subsidiary';
import { SubsidiaryService } from 'src/app/core/services/subsidiary.service';

@Component({
  selector: 'app-list-subsidiary',
  templateUrl: './list-subsidiary.component.html',
  styles: [
  ]
})
export class ListSubsidiaryComponent implements OnInit {
isHidden:boolean = false
currentSector= null;
perpageitem:number=0
subsidiaryListSearchForm = this.fb.group(
  {
   
    label: [''] ,
    sectorLabel: [''] ,
    entityCode : ['']
  
  }
);
  constructor(public subsidiaryService : SubsidiaryService , public fb: FormBuilder) { }


//  get subsidiaryService(){
//   return this._subsidiaryService;
//  }
changePage(){
  this.perpageitem= this.subsidiaryService.ListAllSubsidiaries.filter(x=>x.fkSector == this.subsidiaryService.ListAllSubsidiaries[0].fkSector ).length
   

}
  ngOnInit(): void {
  
    this.subsidiaryService.GetLocalAllSubsidiaries().subscribe(res=>{this.subsidiaryService.ListAllSubsidiaries = res as Subsidiary[];
    this.perpageitem= this.subsidiaryService.ListAllSubsidiaries.filter(x=>x.fkSector == this.subsidiaryService.ListAllSubsidiaries[0].fkSector ).length
    });
  //this.isHidden=false
    //debugger
 
  }

  // changeView(){
  //   this.isHidden=true
  //    if( this.subsidiaryListSearchForm.controls.label.value.length == 0  )
  //    {this.isHidden=false}
  //   debugger

  // }
  assignSubsidiary(value: boolean , subsidiary : Subsidiary){
    subsidiary.isActive = value ; 
    this.subsidiaryService.postOrPutSubsidiary(subsidiary).subscribe(res=>console.log(res))
console.log(subsidiary);
//debugger
    
  }
  countSubsidiariesByfkSector(fkSector,index)
  {
    this.currentSector=fkSector;
    
    let isFirstApparence:boolean=false;
    let mappedList= this.subsidiaryService.ListAllSubsidiaries.map(function(e) { return e.fkSector; }).indexOf(fkSector) ;
    
    if(mappedList != undefined){

         if(this.subsidiaryService.ListAllSubsidiaries.map(function(e) { return e.fkSector; }).indexOf(fkSector)==index)
    {
      isFirstApparence=true;
    } 
    }

    
    if(isFirstApparence)
    {

      console.log(this.subsidiaryService.ListAllSubsidiaries.filter(gd=>gd.fkSector==fkSector).length)
 
      return this.subsidiaryService.ListAllSubsidiaries.filter(gd=>gd.fkSector==fkSector).length
    }
  else {
    return 0;
  }
  
  }

}
