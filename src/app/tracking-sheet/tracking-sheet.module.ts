import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingSheetRoutingModule } from './tracking-sheet-routing.module';
import { ListTrackingSheetComponent } from './list-tracking-sheet/list-tracking-sheet.component';
import { AddTrackingSheetComponent } from './add-tracking-sheet/add-tracking-sheet.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListTrackingSheetComponent, AddTrackingSheetComponent],
  imports: [
    CommonModule,
    TrackingSheetRoutingModule,
    SharedModule
  ]
})
export class TrackingSheetModule { }
