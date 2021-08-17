import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CoastsType } from 'src/app/core/models/coasts-type';
import { Nature } from 'src/app/core/models/nature.model';
import { TypeFraisNature } from 'src/app/core/models/type-frais-nature.model';
import { CoastsTypeService } from 'src/app/core/services/coasts-type.service';
import { NatureService } from 'src/app/core/services/nature.service';
import { TypeFraisNatureService } from 'src/app/core/services/type-frais-nature.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-or-edit-type-frais-nature',
  templateUrl: './add-or-edit-type-frais-nature.component.html',
  styleUrls: ['./add-or-edit-type-frais-nature.component.css']
})
export class AddOrEditTypeFraisNatureComponent implements OnInit {

  

 
  constructor(public typeFraisNatureService:TypeFraisNatureService ,  public typeFraisService : CoastsTypeService , public natureService : NatureService , public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.natureService.getListNature().subscribe(
      res=>{
        this.natureService.ListNature = res as Nature[]
      }
      )
     
    this.typeFraisService.GetAllCoastsTypes().subscribe(
      res=>{
       this.typeFraisService.ListCoastsTypes =  res as CoastsType[]
      }
    )

  }

 
  onSubmit(){
   // debugger
    this.typeFraisNatureService.TypeFraisNatureForm.controls.isActive.setValue(true)
   
    if( this.typeFraisNatureService.TypeFraisNatureForm.controls.typeFraisNatureId.value == '00000000-0000-0000-0000-000000000000')
    {
      this.typeFraisNatureService.postTypeFraisNature ().subscribe(
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
          this.typeFraisNatureService.GetAllTypeFraisNature().subscribe(
            res => {
              this.typeFraisNatureService.ListTypeFraisNature = res as TypeFraisNature[];
            }
          )
        }
        )}
      
     // this.typeFraisNatureService.resetTypeFraisNatureForm()
      this.bsModalRef.hide();

    }
   }
 
  



