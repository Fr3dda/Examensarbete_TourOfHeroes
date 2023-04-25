import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


// Creates how the structure of the routes works. 
const routes: Routes = [
  {
    path:"", 
    redirectTo: "dashboard", 
    pathMatch:"full"
  },
  { path:'dashboard', component: DashboardComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
