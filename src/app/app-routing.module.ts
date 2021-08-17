import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/HomePage/home/home.component';
import { GeneralLayoutComponent } from './shared/Layout-Components/general-layout/general-layout.component';


const routes: Routes = [
 
  {path:'', redirectTo: 'Home' , pathMatch:'full'},
  {path: 'Waste-base', component: GeneralLayoutComponent},
  {path: 'Home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
