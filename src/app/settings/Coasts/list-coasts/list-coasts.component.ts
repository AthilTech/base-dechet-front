// import { Component, OnInit } from '@angular/core';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { Coasts } from 'src/app/core/models/coasts';
// import { CoastsService } from 'src/app/core/services/coasts.service';
// import Swal from 'sweetalert2';
// import { AddOrEditCoastsComponent } from '../add-or-edit-coasts/add-or-edit-coasts.component';

// @Component({
//   selector: 'app-list-coasts',
//   templateUrl: './list-coasts.component.html',
//   styles: []
// })
// export class ListCoastsComponent implements OnInit {
//   bsModalRef:BsModalRef;
//    constructor(public coastsService : CoastsService,
//   public modalService:BsModalService) { }


//   ngOnInit() {
//     this.coastsService.GetAllCoasts().subscribe(
//       res=>{
//         this.coastsService.ListAllCoasts=res as Coasts[]
//       }
//     )
//   }

//   AddCoasts(){
//     this.coastsService.resetaddOrEditCoastsForm();
    
    
//     this.bsModalRef = this.modalService.show(AddOrEditCoastsComponent)
//   }

//   onUpdateCoasts(coasts:Coasts){
//     this.populateCoastsForm(coasts)
//      this.bsModalRef = this.modalService.show(AddOrEditCoastsComponent)
//   }



//   populateCoastsForm(coasts:Coasts){
//     this.coastsService.addOrEditCoastsForm.reset({
//       coastsId:coasts.coastsId,
//       amount:coasts.amount,
//       fK_CoastsType:coasts.fK_CoastsType,
//     });

//   }

//   onDeleteCoasts(coasts)
//   {
    
//     Swal.fire({
//       title: 'Etes-vous sûr de vouloir supprimer cette ligne?',
//       text: 'Vous ne pourrez pas récupérer cet enregistrement!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'oui, supprimer!',
//       cancelButtonText: 'Non, laisser'
//     }).then((result) => {
//       if (result.value) {
//         Swal.fire(
//           'Supprimé!',
//           'Enregistrement supprimé.',
//           'success'
//         )
//       // debugger
//         this.coastsService.DeleteCoasts(coasts).subscribe(
//           res=>{
//             console.log(res)
//             this.coastsService.GetAllCoasts().subscribe(
//               res=>{
//             this.coastsService.ListAllCoasts=res as [];
//               }
//             )
//           }
//         )

//       }
//     })


//   }


// }
