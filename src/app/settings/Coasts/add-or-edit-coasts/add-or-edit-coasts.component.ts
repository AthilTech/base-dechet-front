// import { Component, OnInit } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup,} from '@angular/forms';
// import { BsModalRef } from 'ngx-bootstrap/modal';
// import { Coasts } from 'src/app/core/models/coasts';
// import { CoastsType } from 'src/app/core/models/coasts-type';
// import { Conditionnement } from 'src/app/core/models/conditionnement.model';
// import { CoastsTypeService } from 'src/app/core/services/coasts-type.service';
// import { CoastsService } from 'src/app/core/services/coasts.service';
// import Swal from 'sweetalert2';



// @Component({
//   selector: 'app-add-or-edit-coasts',
//   templateUrl: './add-or-edit-coasts.component.html',
//   styles: []
// })
// export class AddOrEditCoastsComponent implements OnInit {

//   orderForm: FormGroup;
//   items: FormArray;

//   constructor(public coastsTypeService:CoastsTypeService,public bsModalRef: BsModalRef, public coastsService:CoastsService,  public formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.orderForm = new FormGroup({
//       items: new FormArray([])
//     });
    

//   }

//   createItem(): FormGroup {
//     return this.formBuilder.group({
//       coastsTypeLabel: '',
//       coastsTypeId: '00000000-0000-0000-0000-000000000000',
//       isActive: true,
     
//     });
//   }

//   addItem(): void {
//     this.items = this.orderForm.get('items') as FormArray;
//     this.items.push(this.createItem());
    
//   }

//   reinitialiser(){
//   (this.orderForm.get('items') as FormArray).removeAt(0)
//   }
//   get getform() {
//     return (this.orderForm.get('items') as FormArray).controls
//   }

//   onSubmit() {
    
//     this.coastsService.addOrEditCoastsForm.controls.isActive.setValue(true)
//     // console.log(this.orderForm.get('items') as FormArray);
//     if (this.coastsService.addOrEditCoastsForm.value.coastsId == '00000000-0000-0000-0000-000000000000') {
//       (this.orderForm.get('items') as FormArray).value.forEach(element => {
//       //  debugger
//         this.coastsTypeService.postCoastsType(element).subscribe(res => {
//           if (res as CoastsType) {
//             this.coastsService.addOrEditCoastsForm.controls.fK_CoastsType.setValue((res as CoastsType ).coastsTypeId);
//             this.coastsService.postCoasts().subscribe(res => {
//               this.coastsService.resetaddOrEditCoastsForm();
//               this.coastsService.GetAllCoasts().subscribe(
//                 res => {
//                   console.log(res);
//                   this.coastsService.ListAllCoasts = res as Coasts[]

//                 }
//               );
//             })
//           }
//         })
//       });
      
//       while ((this.orderForm.get('items') as FormArray).length !== 0) { (this.orderForm.get('items') as FormArray).removeAt(0) }
//    }
   
//    // else {
//       // debugger
//       // this.conditionementTypeService.updateConditionementType().subscribe(res =>{
//       //   this.conditionnementService.updateConditionnement().subscribe(
//       //     res => {
  
//       //       this.conditionnementService.getListConditionnement().subscribe(
//       //         res => {
//       //           console.log(res);
//       //           this.conditionnementService.ListConditionnement = res as Conditionnement[]
  
//       //         }
//       //       );
//       //     });
//       // })
     

//    // }
   
//   }




// }
