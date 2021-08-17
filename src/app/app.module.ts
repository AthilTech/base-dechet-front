import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './shared/Layout-Components/nav-bar/nav-bar.component';
import { SideBarComponent } from './shared/Layout-Components/side-bar/side-bar.component';
import { FooterComponent } from './shared/Layout-Components/footer/footer.component';
import { GeneralLayoutComponent } from './shared/Layout-Components/general-layout/general-layout.component';
import { SharedModule } from './shared/shared.module';
import { SettingsModule } from './settings/settings.module';
import { TrackingSheetModule } from './tracking-sheet/tracking-sheet.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SettingsModule,
    CoreModule,
    SharedModule,
    TrackingSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
