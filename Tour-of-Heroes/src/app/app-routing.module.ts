import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { HeroesComponent } from './heroes/heroes.component';
import { EditComponent } from './edit/edit.component';


// Creates how the structure of the routes works. 
const routes: Routes = [
  {
    path:"", 
    redirectTo: "dashboard", 
    pathMatch:"full"
  },
  { path:'dashboard', component: DashboardComponent },
  { path:'heroes', component: HeroesComponent },
  { path: 'create', component: CreateComponent },
  { path: 'heroes/edit/:id', component: EditComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
