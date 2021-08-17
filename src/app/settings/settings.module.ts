import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseDechetRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddOrEditDemoComponent } from './Demo/add-or-edit-demo/add-or-edit-demo.component';
import { ListDemoComponent } from './Demo/list-demo/list-demo.component';
import { ListConditionnementComponent } from './Conditionnement/list-conditionnement/list-conditionnement.component';
import { AddOrEditConditionnementComponent } from './Conditionnement/add-or-edit-conditionnement/add-or-edit-conditionnement.component';
import { ListGoalComponent } from './Goal/list-goal/list-goal.component';
import { AddOrEditGoalComponent } from './Goal/add-or-edit-goal/add-or-edit-goal.component';
import { ListNatureComponent } from './Nature/list-nature/list-nature.component';
import { AddOrEditNatureComponent } from './Nature/add-or-edit-nature/add-or-edit-nature.component';
import { ListManagementModeComponent } from './managementMode/list-management-mode/list-management-mode.component';
import { AddOrEditManagementModeComponent } from './managementMode/add-or-edit-management-mode/add-or-edit-management-mode.component';
import { AddOrEditTypeComponent } from './Type/add-or-edit-type/add-or-edit-type.component';
import { ListProviderComponent } from './Provider/list-provider/list-provider.component';
import { AddOrEditProviderComponent } from './Provider/add-or-edit-provider/add-or-edit-provider.component';
import { AddOrEditProviderTypeComponent } from './ProviderType/add-or-edit-provider-type/add-or-edit-provider-type.component';
import { ListProviderTypeComponent } from './ProviderType/list-provider-type/list-provider-type.component';
import { ListSubsidiaryComponent } from './Subsidiary/list-subsidiary/list-subsidiary.component';
import { ListTypeComponent } from './Type/list-type/list-type.component';
import { ListTypeSubsidiaryComponent } from './TypeSubsidiary/list-type-subsidiary/list-type-subsidiary.component';
import { AddOrEditTypeSubsidiaryComponent } from './TypeSubsidiary/add-or-edit-type-subsidiary/add-or-edit-type-subsidiary.component';
import { AddOrEditTypeSubsidiaryProviderComponent } from './TypeSubsidiaryProvider/add-or-edit-type-subsidiary-provider/add-or-edit-type-subsidiary-provider.component';
import { ListTypeSubsidiaryProviderComponent } from './TypeSubsidiaryProvider/list-type-subsidiary-provider/list-type-subsidiary-provider.component';
import { ListUserComponent } from './User/list-user/list-user.component';
import { AddOrEditUserComponent } from './User/add-or-edit-user/add-or-edit-user.component';
import { ListProviderTypeProviderComponent } from './ProviderTypeProvider/list-provider-type-provider/list-provider-type-provider.component';
import { AddOrEditProviderTypeProviderComponent } from './ProviderTypeProvider/add-or-edit-provider-type-provider/add-or-edit-provider-type-provider.component';
import { ListRankingComponent } from './Ranking/list-ranking/list-ranking.component';
//import { ListCoastsTypeComponent } from './CoastsType/list-coasts-type/list-coasts-type.component';
//import { AddOrEditCoastsTypeComponent } from './CoastsType/add-or-edit-coasts-type/add-or-edit-coasts-type.component';
import { AddOrEditRankingComponent } from './Ranking/add-or-edit-ranking/add-or-edit-ranking.component';
//import { AddOrEditCoastsComponent } from './Coasts/add-or-edit-coasts/add-or-edit-coasts.component';
//import { ListCoastsComponent } from './Coasts/list-coasts/list-coasts.component';
import { TableFilterPipe } from '../core/pipes/table-filter.pipe';

import { AddOrEditTypeFraisNatureComponent } from './TypeFraisNature/add-or-edit-type-frais-nature/add-or-edit-type-frais-nature.component';
import { ListTypeFraisNatureComponent } from './TypeFraisNature/list-type-frais-nature/list-type-frais-nature.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOrEditCoastsTypeComponent } from './CoastsType/add-or-edit-coasts-type/add-or-edit-coasts-type.component';
import { ListCoastsTypeComponent } from './CoastsType/list-coasts-type/list-coasts-type.component';
import { AddOrEditFraisComponent } from './Frais/add-or-edit-frais/add-or-edit-frais.component';
import { ListFraisComponent } from './Frais/list-frais/list-frais.component';

import { DetailTypeComponent } from './Nature/detail-type/detail-type.component';
import { DetailSubTypesSubsidiaryComponent } from './TypeSubsidiary/detail-sub-types-subsidiary/detail-sub-types-subsidiary.component';



@NgModule({
  declarations: [
    ListDemoComponent,
    ListProviderComponent,
    AddOrEditProviderComponent,
    AddOrEditProviderTypeComponent,
    ListProviderTypeComponent,
    ListSubsidiaryComponent,
    ListTypeSubsidiaryComponent,
    AddOrEditTypeSubsidiaryComponent,
    AddOrEditTypeSubsidiaryProviderComponent,
    ListTypeSubsidiaryProviderComponent,
    ListUserComponent,
    AddOrEditUserComponent,
    ListProviderTypeProviderComponent,
    AddOrEditProviderTypeProviderComponent,
    AddOrEditDemoComponent,
    ListConditionnementComponent,
    AddOrEditConditionnementComponent,
    ListGoalComponent,
    AddOrEditGoalComponent,
    ListNatureComponent,
    AddOrEditNatureComponent,
    ListManagementModeComponent,
    AddOrEditManagementModeComponent,
    ListTypeComponent,
    AddOrEditTypeComponent,
    ListRankingComponent,
    //ListCoastsTypeComponent,
    //AddOrEditCoastsTypeComponent,
    AddOrEditRankingComponent,
   // AddOrEditCoastsComponent,
    //ListCoastsComponent,
    TableFilterPipe,

    AddOrEditTypeFraisNatureComponent,
    ListTypeFraisNatureComponent,
    AddOrEditCoastsTypeComponent,
    ListCoastsTypeComponent,
    AddOrEditFraisComponent,
    ListFraisComponent,

    DetailTypeComponent,

    DetailSubTypesSubsidiaryComponent,

  ],
  imports: [
    CommonModule,
    BaseDechetRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],


  exports:[
TableFilterPipe
  ],
  entryComponents: [
    AddOrEditDemoComponent,
    AddOrEditConditionnementComponent,
    AddOrEditGoalComponent,
    AddOrEditNatureComponent,
    AddOrEditManagementModeComponent, 
    DetailTypeComponent

  ]
})
export class SettingsModule { }
