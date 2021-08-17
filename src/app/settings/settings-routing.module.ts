import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralLayoutComponent } from '../shared/Layout-Components/general-layout/general-layout.component';
import { ListConditionnementComponent } from './Conditionnement/list-conditionnement/list-conditionnement.component';
import { ListDemoComponent } from './Demo/list-demo/list-demo.component';
import { ListProviderComponent } from './Provider/list-provider/list-provider.component';
import { ListProviderTypeComponent } from './ProviderType/list-provider-type/list-provider-type.component';
import { ListProviderTypeProviderComponent } from './ProviderTypeProvider/list-provider-type-provider/list-provider-type-provider.component';
import { ListSubsidiaryComponent } from './Subsidiary/list-subsidiary/list-subsidiary.component';
import { ListTypeSubsidiaryComponent } from './TypeSubsidiary/list-type-subsidiary/list-type-subsidiary.component';
import { ListTypeSubsidiaryProviderComponent } from './TypeSubsidiaryProvider/list-type-subsidiary-provider/list-type-subsidiary-provider.component';
import { ListGoalComponent } from './Goal/list-goal/list-goal.component';
import { ListManagementModeComponent } from './managementMode/list-management-mode/list-management-mode.component';
import { ListNatureComponent } from './Nature/list-nature/list-nature.component';
//import { ListCoastsComponent } from './Coasts/list-coasts/list-coasts.component';

import { ListRankingComponent } from './Ranking/list-ranking/list-ranking.component';
import { ListTypeComponent } from './Type/list-type/list-type.component'
import { ListCoastsTypeComponent } from './CoastsType/list-coasts-type/list-coasts-type.component';
import { ListTypeFraisNatureComponent } from './TypeFraisNature/list-type-frais-nature/list-type-frais-nature.component';
import { ListFraisComponent } from './Frais/list-frais/list-frais.component';


const routes: Routes = [
  {path: 'Waste-base/settings', component: GeneralLayoutComponent , 
 children : [

 {path:'demo',component:ListDemoComponent},
 
 {path:'subsidiary',component:ListSubsidiaryComponent},
 {path:'type-subsidiary',component:ListTypeSubsidiaryComponent},
 {path:'type-subsidiary_provider',component:ListTypeSubsidiaryProviderComponent},
 {path:'provider',component:ListProviderComponent},
 {path:'provider-type',component:ListProviderTypeComponent},
 {path:'provider-type-provider',component:ListProviderTypeProviderComponent},
 {path:'ranking',component:ListRankingComponent},
  { path: 'list-Conditionnement', component: ListConditionnementComponent },
  { path: 'list-goal', component: ListGoalComponent },
  { path: 'list-nature', component: ListNatureComponent },
  { path: 'list-modeGestion', component: ListManagementModeComponent },
  { path: 'list-type', component: ListTypeComponent },
  { path: 'list-type-frais', component: ListCoastsTypeComponent },
  { path: 'list-type-frais-nature', component: ListTypeFraisNatureComponent },
  { path: 'list-frais', component: ListFraisComponent },
 ]

},
 




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class BaseDechetRoutingModule { }
