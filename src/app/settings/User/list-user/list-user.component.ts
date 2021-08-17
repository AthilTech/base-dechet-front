import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styles: []
})
export class ListUserComponent implements OnInit {
  bsModalRef: BsModalRef;
  resultedUserList:any[]=new Array();
  AppRoleList:any[]=new Array();
  ListOfAffectedUsers:any[]=new Array();
  // constructor(private modalService:BsModalService,
  //   private serviceRoleManagement:RoleManagementService,
  //    private serviceUser: UserService,private authenticationService:AuthenticationService) { }

  ngOnInit() {
    // this.authenticationService.getRoleByApplicationId().subscribe(
    //   res=>{
    //    this.AppRoleList =  res as any[]
    //   }
    // )
    // this.authenticationService.getUsersByAppId().subscribe(
    //   res=>{
    //     this.ListOfAffectedUsers =  res as any[]
    //   }
    // )


    
  }

  // AddRoleManagement(){
  //   this.serviceRoleManagement.resetAddOrEditRoleManagementForm();
  //   this.bsModalRef = this.modalService.show(AddOrEditRoleManagementComponent)
  // }

  // onUpdateRoleManagemnt(role:RoleManagement){
  //   this.populateRoleManagementForm(role)
  //   this.bsModalRef = this.modalService.show(AddOrEditRoleManagementComponent)
  // }
  // populateRoleManagementForm(role:RoleManagement){
  //   this.serviceRoleManagement.addOrEditRoleManagementForm.reset({
  //     roleManagementId:role.roleManagementId,
  //     roleLabel:role.roleLabel,
  //     fK_User:role.fK_User
  //   });
  // }
  // onDeleteRoleManagemnt(idrole)
  // { 
    
  // }

}
