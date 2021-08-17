import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';
import { GeneralLayoutComponent } from './Layout-Components/general-layout/general-layout.component';
import { FooterComponent } from './Layout-Components/footer/footer.component';
import { NavBarComponent } from './Layout-Components/nav-bar/nav-bar.component';
import { SideBarComponent } from './Layout-Components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './HomePage/home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [FooterComponent,
    NavBarComponent,
    SideBarComponent,
    GeneralLayoutComponent,
    HomeComponent],
  imports: [
    SharedModule.MODULE_LIST,

  ],
  exports: [SharedModule.MODULE_LIST]
})
export class SharedModule {
  static readonly MODULE_LIST = [
    ModalModule.forRoot()  ,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    NgxPaginationModule,
    RouterModule,
    Ng2SearchPipeModule
    
];

 }
