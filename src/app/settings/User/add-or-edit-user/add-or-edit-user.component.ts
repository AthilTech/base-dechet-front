import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-or-edit-user',
  templateUrl: './add-or-edit-user.component.html',
  styles: []
})
export class AddOrEditUserComponent implements OnInit {
  resultedUserList: any[] = new Array();
  AppRoleList: any[] = new Array();

  // constructor(private modalService: BsModalService, private bsModalRef: BsModalRef,
  //   private authenticationService:AuthenticationService,
  //   private userService:UserService,private toastr:ToastrService) { }


  ngOnInit() {
    // this.authenticationService.getRoleByApplicationId().subscribe(
    //   res=>{
    //    this.AppRoleList =  res as any[]
    //   }
    // )
   
  }

//   onSearchChange(event) {
//     if (event.term.length >= 3) {
//       this.userService.serachUserWithKeyWord(event.term).subscribe
//         (
//           res => {
//             this.resultedUserList = res as any[]
//           }
//         )
//     }
// }

//   onSubmit(){
//   let identityUserObject: UserIdentityDto=new UserIdentityDto();
//     let selectedUser =  this.resultedUserList.find(u=>u.userID==this.userService.formUser.value.userID)
//     identityUserObject.applicationId = environment.appId
//     identityUserObject.userEmployeeId = selectedUser.matricule
//     identityUserObject.userUserName = selectedUser.matricule
//     identityUserObject.userFullName = selectedUser.fullName
//     identityUserObject.userEmail = selectedUser.lotusAdress
//     identityUserObject.userSubsidiaryCode = selectedUser.subsidiaryCode
//     identityUserObject.userPassword = selectedUser.matricule
//     identityUserObject.userIsEnabled = selectedUser.isActive
//      identityUserObject.userApplicationRoles.push({roleId:this.userService.formUser.value.appRoleId, roleName:''})
//     this.authenticationService.postUser(identityUserObject).subscribe(
//       res=>{
//     console.log(res);
//     this.authenticationService.getUsersByAppId().subscribe(
//       res=>{
//        this.authenticationService.listUsersByAppId = res as any[]
//        this.authenticationService.getRoleByApplicationId().subscribe(
//         res=>{
//          this.AppRoleList =  res as any[]
//          this.toastr.success('Elément Ajouté avec succée!')

//         }
//       )
       
//       }
//     )
//       }
//     )
//   }

  // if (this.serviceRoleManagement.addOrEditRoleManagementForm.value.roleManagementId == '00000000-0000-0000-0000-000000000000') {
  //   this.serviceRoleManagement.postRoleManagement().subscribe(
  //     res => {

  //       this.serviceRoleManagement.resetAddOrEditRoleManagementForm()
      
  //       this.serviceRoleManagement.GetRoleManagement().subscribe(
  //         res => {
  //           this.serviceRoleManagement.ListOfRoleManagement = res as RoleManagement[]
          
  //         }
  //       )
  //     });

  // }
  // else {
  //   this.serviceRoleManagement.updateRoleManagement().subscribe(
  //     res => {
  //       console.log(res);
  //       this.serviceRoleManagement.addOrEditRoleManagementForm.disable();
    
  //       this.serviceRoleManagement.GetRoleManagement().subscribe(
  //         res => {
  //           this.serviceRoleManagement.ListOfRoleManagement = res as RoleManagement[]
  //         }
  //       )
  //     });
  //     this.bsModalRef.hide();
  // }
  // this.serviceRoleManagement.GetRoleManagement().subscribe(
  //   res => {
  //     this.serviceRoleManagement.ListOfRoleManagement = res as RoleManagement[]
  //   }
  // )
  
}


