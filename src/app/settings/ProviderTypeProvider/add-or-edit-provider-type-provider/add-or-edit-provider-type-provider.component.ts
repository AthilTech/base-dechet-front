import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Provider } from 'src/app/core/models/provider';
import { Type } from 'src/app/core/models/type';
import { ProviderTypeProviderService } from 'src/app/core/services/provider-type-provider';
import { ProviderTypeService } from 'src/app/core/services/provider-type.service';
import { ProviderService } from 'src/app/core/services/provider.service';
import { SubsidiaryService } from 'src/app/core/services/subsidiary.service';
import { TypeSubsidiaryService } from 'src/app/core/services/type-subsidiary.service';
import { TypeService } from 'src/app/core/services/type.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-or-edit-provider-type-provider',
  templateUrl: './add-or-edit-provider-type-provider.component.html',
  styles: []
})
export class AddOrEditProviderTypeProviderComponent implements OnInit {
  lisTypes : Type[]=new Array()
  constructor(public providerTypeProviderService : ProviderTypeProviderService , public providerTypeService :ProviderTypeService , public   providerService : ProviderService, public bsModalRef: BsModalRef) { }

  ngOnInit() {

    this.providerService.GetAllProviders().subscribe(
      res=>{
       this.providerService.ListAllProviders =  res as Provider[]
      }
    )
       this.providerTypeService. GetAllProviderTypes().subscribe(
       res=>{
         this.providerTypeService.ListAllProviderTypes=res as []
       }
    )
  }



  onSubmit(){
    this.lisTypes = this.providerTypeProviderService.addOrEditProviderTypeProviderForm.controls.fK_Provider.value ;
    this.providerTypeProviderService.addOrEditProviderTypeProviderForm.controls.fK_Provider.setValue("")
    this.lisTypes.forEach(x=>  {this.providerTypeProviderService.addOrEditProviderTypeProviderForm.controls.fK_Provider.setValue (x)

     this.providerTypeProviderService.PostProvider_ProviderTypes ().subscribe(
        res => {
          if(res =="Added done"){
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
                 if(res == "Affectation déja faite"){
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
          this.providerTypeProviderService. GetAllProvider_ProviderTypes().subscribe(
            res => {
              this.providerTypeProviderService.ListAllProviderTypeProviders = res as [];
            }
          )
        })})
      this.providerTypeProviderService.resetaddOrEditProviderTypeProviderForm()
      this.bsModalRef.hide();

    }

}
