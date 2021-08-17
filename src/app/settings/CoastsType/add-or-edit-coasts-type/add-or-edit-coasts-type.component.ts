import { Component, OnInit } from '@angular/core';
import { CoastsType } from 'src/app/core/models/coasts-type';
import { CoastsTypeService } from 'src/app/core/services/coasts-type.service';

@Component({
  selector: 'app-add-or-edit-coasts-type',
  templateUrl: './add-or-edit-coasts-type.component.html',
  styleUrls: ['./add-or-edit-coasts-type.component.css']
})
export class AddOrEditCoastsTypeComponent implements OnInit {

  constructor(public coastsTypeService: CoastsTypeService ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.coastsTypeService.CoastsTypeForm.controls.isActive.setValue(true)
    if( this.coastsTypeService.CoastsTypeForm.controls.coastsTypeId.value == '00000000-0000-0000-0000-000000000000')
    
     { this.coastsTypeService.postCoastsType().subscribe(
      res=>{
       // if (res as string == 'Ponderation existe'){
         // this.toastr.error('Ponderation existe !') 
       // }
        
       // else {
          this.coastsTypeService.resetCoastsTypeForm();
            this.coastsTypeService.GetAllCoastsTypes().subscribe(
            res=>{
              console.log(res);
              this.coastsTypeService.ListCoastsTypes=res as CoastsType[] 
             // this.toastr.success('Elément Ajouté avec succée!') 
             }
              );
        }
            
      //  }
        );

      }
      
    else{

      this.coastsTypeService.updateCoastsType().subscribe(
        res=>{ 
         // this.coastsTypeService.ListCoastsTypes.disable()()
         // if (res as string == 'Ponderation existe'){
            //this.toastr.error('Ponderation existe !') 
         // }
       // else{ 
          this.coastsTypeService.GetAllCoastsTypes().subscribe(
            res=>{
              console.log(res);
              this.coastsTypeService.ListCoastsTypes=res as CoastsType[]
             // this.toastr.warning('Elément Modifié avec succée!')
           } 
           );
            }
         
        
       // }
      )

    }
    this.coastsTypeService.GetAllCoastsTypes().subscribe(
      res=>{
        console.log(res);
        this.coastsTypeService.ListCoastsTypes=res as CoastsType[]   }
        );

  }

}