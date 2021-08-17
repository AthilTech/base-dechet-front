import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ManagemantMode_Nature } from 'src/app/core/models/ManagementMode_Nature';
import { ModeGestion } from 'src/app/core/models/mode-gestion.model';
import { Nature } from 'src/app/core/models/nature.model';
import { ModeGestionService } from 'src/app/core/services/mode-gestion.service';
import { NatureService } from 'src/app/core/services/nature.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-or-edit-management-mode',
  templateUrl: './add-or-edit-management-mode.component.html',
  styleUrls: ['./add-or-edit-management-mode.component.css']
})
export class AddOrEditManagementModeComponent implements OnInit {
  nature: Nature;
  constructor(public fb: FormBuilder, public modeGestionService: ModeGestionService, public natureService: NatureService) { }

  ngOnInit(): void {
    this.natureService.getListNature().subscribe(res => this.natureService.ListNature = res as Nature[])
  }

  get managemantMode_NatureFormArray(): FormArray {
    return this.modeGestionService.formModeGestion.controls.managemantMode_Nature as FormArray
  }


  changenature(value) {
    console.log(value);
    this.nature = value
  }

  addNewManagementModeToFormArray() {
    this.managemantMode_NatureFormArray.push(
      this.fb.group({
        managementMode_NatureId: ['00000000-0000-0000-0000-000000000000'],
        fk_NatureId: this.nature.natureId,
        natureLabel: this.nature.natureLabel,
        managementMode: this.fb.group(
          {
            managementModeId: ['00000000-0000-0000-0000-000000000000'],
            managementModeLabel: '',
            isActive: true
          }),
        isActive: true
      }),
    )
  }

  removemanagemantMode_Nature() {
    let managemantMode_Nature: ManagemantMode_Nature = new ManagemantMode_Nature();

    Object.assign(managemantMode_Nature, this.managemantMode_NatureFormArray.at(this.managemantMode_NatureFormArray.length - 1).value)

    if (managemantMode_Nature.managemantMode_NatureId == '00000000-0000-0000-0000-000000000000') {

      this.managemantMode_NatureFormArray.removeAt(this.managemantMode_NatureFormArray.length - 1)
    }
    else {

      this.modeGestionService.deleteManagementModeNature(managemantMode_Nature.managemantMode_NatureId).subscribe(
        res => {
          this.managemantMode_NatureFormArray.removeAt(this.managemantMode_NatureFormArray.length - 1)
        }
      )
    }
  }

  get aliasesArrayControl() {
    return (this.managemantMode_NatureFormArray as FormArray).controls;
  }
  // addModeGestion() {

  //   if (this.managemantMode_NatureFormArray.value.ManagementMode_NatureId == '00000000-0000-0000-0000-000000000000') {
  //     this.modeGestionService.postModeGestionNature(this.managemantMode_NatureFormArray.value).subscribe(res => {

  //       //show success msg
  //       Swal.fire(
  //         {
  //           toast: true,
  //           position: 'top-end',
  //           showConfirmButton: false,
  //           timer: 3000, title: 'élément avec succéss',
  //           icon: 'success',
  //         })


  //      this.modeGestionService.getListModeGestion().subscribe(res=>console.log(res))

  //     })
  //   }
  //   else {
  //     this.modeGestionService.putModeGestionNature(this.managemantMode_NatureFormArray.value).subscribe(res => {

  //     })
  //   }
  // }

  resetForm = () => {
    while (this.managemantMode_NatureFormArray.length !== 0) {
      this.managemantMode_NatureFormArray.removeAt(0)
    }
  }

  onSubmit() {
    this.managemantMode_NatureFormArray.controls.forEach((fg, i) => {

      this.modeGestionService.postModeGestionNature(fg.value).subscribe(res => {
        console.log(res);
        this.modeGestionService.getListModeGestion().subscribe(
          res => {
            this.modeGestionService.ListModeGestion = res as ModeGestion[];
            this.resetForm()
          },
          err => {
            console.log(err);
          }
        );
      }
      )

    });


    // if( this.modeGestionService.formModeGestion.controls.managementModeId.value == '00000000-0000-0000-0000-000000000000')

    //  { this.modeGestionService.postModeGestion().subscribe(
    //   res=>{
    //    // if (res as string == 'Ponderation existe'){
    //      // this.toastr.error('Ponderation existe !') 
    //    // }

    //    // else {
    //       this.modeGestionService.resetModeGestionForm();
    //         this.modeGestionService.getListModeGestion().subscribe(
    //         res=>{
    //           console.log(res);
    //           this.modeGestionService.ListModeGestion=res as ModeGestion[] 
    //          // this.toastr.success('Elément Ajouté avec succée!') 
    //          }
    //           );
    //     }

    //   //  }
    //     );

    //   }

    // else{

    //   this.modeGestionService.updateModeGestion().subscribe(
    //     res=>{ 
    //       this.modeGestionService.formModeGestion.disable()

    //       this.modeGestionService.getListModeGestion().subscribe(
    //         res=>{
    //           console.log(res);
    //           this.modeGestionService.ListModeGestion=res as ModeGestion[]
    //        } 
    //        );
    //         }
    //   )

    // }  

  }

}