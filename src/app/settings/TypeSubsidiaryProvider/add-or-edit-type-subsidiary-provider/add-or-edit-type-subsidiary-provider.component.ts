import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Provider } from 'src/app/core/models/provider';
import { ProviderType } from 'src/app/core/models/provider-Type';
import { Type } from 'src/app/core/models/type';
import { ProviderTypeProviderService } from 'src/app/core/services/provider-type-provider';
import { ProviderTypeService } from 'src/app/core/services/provider-type.service';
import { ProviderService } from 'src/app/core/services/provider.service';
import { SubsidiaryService } from 'src/app/core/services/subsidiary.service';
import { TypeSubsidiaryProviderService } from 'src/app/core/services/type-subsidiary-provider.service';
import { TypeSubsidiaryService } from 'src/app/core/services/type-subsidiary.service';
import { TypeService } from 'src/app/core/services/type.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-or-edit-type-subsidiary-provider',
  templateUrl: './add-or-edit-type-subsidiary-provider.component.html',
  styles: []
})
export class AddOrEditTypeSubsidiaryProviderComponent implements OnInit {
  listNatures: any[] = new Array()
  lisTypes: Type[] = new Array()
  subsidiaryId: string;
  fullObjectName: any;
  constructor(public typeSubsidiaryProviderService: TypeSubsidiaryProviderService
    ,

    public providerService: ProviderService, public typeSubsidiaryService: TypeSubsidiaryService,
    public subsidiaryService: SubsidiaryService, public providerTypeProviderService: ProviderTypeProviderService,
    public providerTypeService: ProviderTypeService, public bsModalRef: BsModalRef,
    public typeService: TypeService) { }

  ngOnInit() {
    this.typeSubsidiaryService.GetAllNatures().subscribe(res => this.listNatures = res as []);
    this.typeService.GetListSubsidaryByType().subscribe(
      res => {
        this.typeService.ListSubsidaryTypes = res as any[]
      }
    )

    // this.providerService.GetAllProviders().subscribe(
    //   res=>{
    //    this.providerService.ListAllProviders =  res as Provider[]
    //   }
    // )

    this.providerTypeService.GetAllProviderTypes().subscribe(
      res => {
        this.providerTypeService.ListAllProviderTypes = res as ProviderType[]
        // debugger
      }
    )
    this.typeSubsidiaryService.GetAllType_Subsidiaries().subscribe(
      res => {
        this.typeSubsidiaryService.ListAllType_Subsidiaries = res as any[]
        this.typeSubsidiaryService.ListAllType_Subsidiaries.map((i) => { i.typeLabel = i.typeLabel + ' ' + i.label; return i; });
      }
    )


  }

  change(event) {
    // debugger
    console.log(event);
    //this.typeSubsidiaryProviderService.resetaddOrEditTypeSubsidiaryProviderForm()
    this.providerTypeProviderService.GetAllProvider_ProviderTypesByProvierTypeId(event.providerTypeId).subscribe(
      res => this.providerService.ListAllProviders = res as []
    )
    //debugger

  }
  getListTypes(event) {
    console.log(event);
    //   debugger
    this.typeSubsidiaryService.GetType_SubsidiariesBySubsidiaryIdAndNature(event.natureId, 
      this.typeSubsidiaryProviderService.addOrEditType_Subsidiary_ProviderForm.controls.fK_Subsidiary.value).subscribe(
      res => {
        this.typeSubsidiaryService.ListType_SubsidiariesByNatureIdAndSubsidiaryId = res as Type[]
      }
    )

  }

  getNatureId(event) {
   // this.subsidiaryId = event.subsidiaryId;

  }


  getFullObjectName(event) {
    //  this.fullObjectName=typeLabel[0].typeLabel + typeLabel[0].label;
    event.map((i) => { i.typeLabel = i.typeLabel + ' ' + i.label; return i; });
    console.log(event[0].typeLabel + event[0].label);
    //debugger

  }

  onSubmit() {
    this.typeSubsidiaryProviderService.addOrEditType_Subsidiary_ProviderForm.controls.isActive.setValue(true)
    this.lisTypes = this.typeSubsidiaryProviderService.addOrEditType_Subsidiary_ProviderForm.controls.fK_Type_Subsidiary.value;
    //  debugger
    this.typeSubsidiaryProviderService.addOrEditType_Subsidiary_ProviderForm.controls.fK_Type_Subsidiary.setValue("")
    this.lisTypes.forEach(x => {
      this.typeSubsidiaryProviderService.addOrEditType_Subsidiary_ProviderForm.controls.fK_Type_Subsidiary.setValue(x)
      //debugger
      this.typeSubsidiaryProviderService.postTypeSubsidiaryProvider().subscribe(
        res => {

          if (res == "Added done") {
            Swal.fire({
              position: 'top-end',
              text: 'l\'ajout est effectué avec succès',
              icon: 'success',
              toast: true,
              timer: 3000,
              timerProgressBar: true,
              showConfirmButton: false
            });

          }
          if (res == "Affectation déja faite") {
            Swal.fire({
              position: 'top-end',
              text: 'Affectation déja faite',
              icon: 'warning',
              toast: true,
              timer: 3000,
              timerProgressBar: true,
              showConfirmButton: false
            });

          }
          this.typeSubsidiaryProviderService.GetAllTypeSubsidiaryProvider().subscribe(
            res => {
              this.typeSubsidiaryProviderService.ListAllTypeSubsidiaryProviders = res as [];



            }
          )
        })
    })
    this.typeSubsidiaryProviderService.resetaddOrEditTypeSubsidiaryProviderForm()
    this.bsModalRef.hide();

  }

}
