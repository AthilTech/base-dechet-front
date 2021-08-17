import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralLayoutComponent } from '../shared/Layout-Components/general-layout/general-layout.component';
import { ListTrackingSheetComponent } from './list-tracking-sheet/list-tracking-sheet.component';


const routes: Routes = [
  {path: 'Waste-base', component: GeneralLayoutComponent , 
  children : [
 
  {path:'tracking-sheet',component:ListTrackingSheetComponent}
  

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackingSheetRoutingModule { }
